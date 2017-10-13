class Income < ApplicationRecord

  has_one :manager_take, dependent: :destroy

  accepts_nested_attributes_for :manager_take, :allow_destroy => true

  mount_uploader :attached_file, AttachedFileUploader

  validates :amount, presence: true

  #
  def self.incomes_sum
    self.pluck(:amount).sum
  end

  # Validates the size of an uploader picture
  def picture_size
    if attached_file.size > 200.kilobytes
      errors.add(:attached_file, 'should be less than 200 KB')
    end
  end

end
