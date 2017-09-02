class Expense < ApplicationRecord

  has_one :inssurance
  has_one :break
  has_one :damage

  accepts_nested_attributes_for :inssurance
  accepts_nested_attributes_for :break
  accepts_nested_attributes_for :damage

  validates :amount, presence: true

  def name_with_initial
    "#{first_name} #{last_name}"
  end

end
