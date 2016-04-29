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
    puts image_params
    puts params
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
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
    redirect_to root_url
  end

  private

  def image_params
    params.require(:image).permit(:image_url, :title, :description, :date_taken, :file_name, :image_type)
  end
end
