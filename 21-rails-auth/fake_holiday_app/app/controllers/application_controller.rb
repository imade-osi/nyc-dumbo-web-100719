class ApplicationController < ActionController::Base
  before_action :set_page_view
  before_action :set_current_user
  before_action :authorized

  private

  def set_current_user
    @current_user = User.find_by(id: session[:user_id])
  end
  
  def set_page_view
    # if session[:page_views_remaining] == nil
    #   session[:page_views_remaining] = 5
    # end
    session[:page_views_remaining] ||= 5
  end

  def authorized
    redirect_to login_path unless @current_user
  end
end
