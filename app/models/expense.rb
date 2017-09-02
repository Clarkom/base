class Expense < ApplicationRecord

  has_one :inssurance
  has_one :break
  has_one :damage
  has_one :owner_take

  accepts_nested_attributes_for :inssurance
  accepts_nested_attributes_for :break
  accepts_nested_attributes_for :damage
  accepts_nested_attributes_for :owner_take

  validates :amount, presence: true

  def name_with_initial
    "#{first_name} #{last_name}"
  end

end
