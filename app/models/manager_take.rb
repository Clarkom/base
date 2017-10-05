class ManagerTake < ApplicationRecord
  belongs_to :income
  belongs_to :manager


  accepts_nested_attributes_for :income, :allow_destroy => true

  validates :date, presence: true

  #
  #
  #
  def self.manager_takes_sum
    self.includes(:income).pluck(:amount).sum
  end

  #
  #
  #
  def self.manager_takes_by_year(year)

    ApplicationController
        .helpers
        .similar_expenses_amounts_by_date(self.includes(:income).where('extract(year from date) = ?', year)
                                              .pluck(:date.to_s, :amount))

  end

  #
  #
  #
  def self.manager_takes_by_year_and_month(year, month)
    ApplicationController
        .helpers
        .similar_expenses_amounts_by_year_and_month_v2(
            self.includes(:income)
                .where('extract(year from date) = ? AND extract(month from date) = ?', year, month)
                .pluck(:date.to_s, :amount)
        )
  end


end
