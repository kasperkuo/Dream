class Image < ActiveRecord::Base
  validates :image_url, :user_id, presence: true

  belongs_to :user
  belongs_to :album
end
