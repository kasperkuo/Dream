class Image < ActiveRecord::Base
  validates :title, :user_id, :album_id, :image_type, presence: true
  validates_numericality_of :image_url, allow_nil: true
  validates_numericality_of :file_name, allow_nil: true

  validate :image_url_xor_file_name

  belongs_to :user

  private

    def image_url_xor_file_name
      unless image_url.blank? ^ file_name.blank?
        errors.add(:base, "Specify a image url or file name, not both")
      end
    end
end
