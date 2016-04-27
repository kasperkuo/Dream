class Image < ActiveRecord::Base
  validates :title, :user_id, :album_id, :image_type, presence: true

  belongs_to :user

end
