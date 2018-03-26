class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show

  end

  def new

  end

  def edit

  end

  def update

  end

end
