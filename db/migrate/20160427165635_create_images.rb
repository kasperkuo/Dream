class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title
      t.text :description
      t.integer :user_id, null: false
      t.integer :album_id
      t.string :image_url, null: false
      t.string :image_type

      t.timestamps null: false
    end

    add_index :images, :user_id
  end
end
