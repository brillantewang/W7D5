class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["User not found"], status: 404
    end
  end
end
