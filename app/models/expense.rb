class Expense < ApplicationRecord

  has_one :insurance, dependent: :destroy
  has_one :break, dependent: :destroy
  has_one :damage, dependent: :destroy
  has_one :owner_take, dependent: :destroy

  accepts_nested_attributes_for :insurance, :allow_destroy => true
  accepts_nested_attributes_for :break, :allow_destroy => true
  accepts_nested_attributes_for :damage, :allow_destroy => true
  accepts_nested_attributes_for :owner_take, :allow_destroy => true

  validates :amount, presence: true

end
