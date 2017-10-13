class Insurer < ApplicationRecord

  validates :name, presence: true
  validate  :picture_size

  mount_uploader :picture, AttachedFileUploader

  # Validates the size of an uploader picture
  def picture_size
    if picture.size > 50.kilobytes
      errors.add(:picture, 'should be less than 200 KB')
    end
  end

end
