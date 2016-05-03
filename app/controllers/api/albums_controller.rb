class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album)
    if @album.save
      render "api/albums/show"
    else
      @errors = @album.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def update
    @album = Album.find(params[:id])

    if @album.update(album_params)
      render :show
    else
      @errors = @album.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    render json: {}
  end

  def album_params
    params.require(:album).permit(:title, :description, :user_id)
  end
end
