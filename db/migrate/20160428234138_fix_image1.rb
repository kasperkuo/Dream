class FixImage1 < ActiveRecord::Migration
  def change
    remove_column :images, :title
    remove_column :images, :description
    remove_column :images, :user_id
    remove_column :images, :album_id
    remove_column :images, :image_type

    add_column :images, :title, :string
    add_column :images, :image_type, :string
    add_column :images, :description, :text

  end
end
