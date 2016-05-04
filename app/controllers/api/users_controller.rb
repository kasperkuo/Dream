class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :email)
  end
end
