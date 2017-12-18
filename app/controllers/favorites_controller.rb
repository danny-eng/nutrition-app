class FavoritesController < ApiController
  before_action :require_login, except: [:index, :show, :show_user]

  def index
    favorites = Favorite.all
    render json: { favorites: favorites }
  end

  def show
    favorites = Favorite.find(params[:id])
    favorite_user = favorite.user
    render json: { favorite: favorite, username: favorite_user.username }
  end

  def create
    favorite = Favorite.new(favorite_params)
    favorite.user = current_user
      if favorite.save
        render json: {
          message: 'ok',
          favorite: favorite,
        }
      else
        render json: {message: 'Could not save favorite'}
      end
  end

  def destroy
    favorite = Favorite.delete(params[:id])
    render json: {
      message: 'delete successful',
    }
  end

  private
  def favorite_params
    params.require(:favorite).permit(:ndbno, :name)
  end

end
