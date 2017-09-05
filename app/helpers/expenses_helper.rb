module ExpensesHelper

  def current_path(path)
    current_uri = request.env['PATH_INFO']
    current_uri.include? path
  end

end
