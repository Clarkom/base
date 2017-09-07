class Damage < ApplicationRecord
  belongs_to :damage_type, optional: true
  belongs_to :expense
  belongs_to :driver, optional: true

  accepts_nested_attributes_for :expense, :allow_destroy => true

  validates :date, presence: true

  def self.damages_sum
    self.includes(:expense).pluck(:amount).sum
  end

end
