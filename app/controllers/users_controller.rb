class UsersController < ApiController
  before_action :require_login, except: [:create, :show]

  def create
    user = User.create!(user_params)
    render json: { token: user.auth_token }
  end

  def show
    user_id = User.find_by(auth_token: params[:id]).id
    favorites = Favorite.where(user_id: user_id)
    render json: { favorites: favorites }
  end

  def profile
    user = User.find_by_auth_token!(request.headers[:token])
    user_favorites = Favorites.where(user_id: user.id)
    render json: {
      user: {
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
      },
      monster: {
        favorites: user_favorites,
      }
    }
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :first_name, :last_name)
  end

end
