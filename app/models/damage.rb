class Damage < ApplicationRecord
  belongs_to :damage_type, optional: true
  belongs_to :expense
  belongs_to :driver, optional: true

  accepts_nested_attributes_for :expense, :allow_destroy => true

  validates :date, presence: true

  #
  #
  #
  def self.damages_sum
    self.includes(:expense).pluck(:amount).sum
  end

  #
  #
  #
  def self.damages_by_year(year)

    ApplicationController
        .helpers
        .similar_expenses_amounts_by_date(self.includes(:expense).where('extract(year from date) = ?', year)
        .pluck(:date.to_s, :amount))

  end

  #
  #
  #
  def self.damages_by_year_and_month(year, month)
    ApplicationController
        .helpers
        .similar_expenses_amounts_by_year_and_month_v2(
            self.includes(:expense)
                .where('extract(year from date) = ? AND extract(month from date) = ?', year, month)
                .pluck(:date.to_s, :amount)
        )
  end

end
