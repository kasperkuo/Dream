class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def show
    @image = Image.find(params[:id])
  end

  def new
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render "api/images/show"
    else
      @errors = @image.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def edit
    @image = Image.find(params[:id])
  end

  def update
    @image = Image.find(params[:id])

    if @image.update(image_params)
      render :show
    else
      @errors = @image.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
    render json: {}
  end

  private

  def image_params
    params.require(:image).permit(:image_url, :title, :description, :image_type, :user_id, :album_id)
  end
end
