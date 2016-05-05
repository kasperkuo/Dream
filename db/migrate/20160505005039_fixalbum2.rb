class Fixalbum2 < ActiveRecord::Migration
  def change
    add_column :albums, :cover_photo_url, :string
  end
end
