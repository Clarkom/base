class Expense < ApplicationRecord

  has_one :insurance, dependent: :destroy
  has_one :break, dependent: :destroy
  has_one :damage, dependent: :destroy
  has_one :owner_take, dependent: :destroy

  accepts_nested_attributes_for :insurance, :allow_destroy => true
  accepts_nested_attributes_for :break, :allow_destroy => true
  accepts_nested_attributes_for :damage, :allow_destroy => true
  accepts_nested_attributes_for :owner_take, :allow_destroy => true

  mount_uploader :attached_file, AttachedFileUploader

  validates :amount, presence: true
  validate  :picture_size

  #
  #
  # Expenses Sum
  def self.expenses_sum
    self.pluck(:amount).sum
  end

  # Validates the size of an uploader picture
  def picture_size
    if attached_file.size > 200.kilobytes
      errors.add(:attached_file, 'should be less than 200 KB')
    end
  end

end
