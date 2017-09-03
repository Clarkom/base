class Expense < ApplicationRecord

  has_one :insurance
  has_one :break
  has_one :damage
  has_one :owner_take

  accepts_nested_attributes_for :insurance
  accepts_nested_attributes_for :break
  accepts_nested_attributes_for :damage
  accepts_nested_attributes_for :owner_take

  validates :amount, presence: true

end
