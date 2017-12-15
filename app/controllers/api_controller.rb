class ApiController < ApplicationController
  def require_login
    authenticate_token || render_unauthorized("Access denied")
  end

  def current_user
    @current_user ||= authenticate_token
  end

  def current_id
    show_user_id
  end

  protected

  def render_unauthorized(message)
    errors = { errors: [ detail: message ] }
    render json: errors, status: :unauthorized
  end

  private

  def authenticate_token
    authenticate_with_http_token do | token, options |
      User.find_by(auth_token: token)
    end
  end

  def show_user_id
    authenticate_with_http_token do | token, options |
      User.find_by(auth_token: token).id
    end
  end

end
