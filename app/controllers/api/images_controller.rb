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
      login(@image)
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
    params.require(:image).permit(:title, :description, :image_url, :file_name, :image_type, :date_taken)
  end
end