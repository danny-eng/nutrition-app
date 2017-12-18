require 'bcrypt'

class UsersController < ApiController
  before_action :require_login, except: [:create, :show]

  include BCrypt

  def create
    user = User.create!(user_params)
    render json: { token: user.auth_token }
  end

  def show
    user_id = User.find_by(auth_token: params[:id]).id
    favorites = Favorite.where(user_id: user_id)
    render json: { favorites: favorites }
  end

  def update
    user = User.find_by(auth_token: params[:id])
    user.password = params[:password]
    user.save
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :first_name, :last_name)
  end

end
