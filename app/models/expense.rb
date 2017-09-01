class Expense < ApplicationRecord

  has_one :inssurance
  has_one :break

  accepts_nested_attributes_for :inssurance
  accepts_nested_attributes_for :break

  validates :amount, presence: true

end
