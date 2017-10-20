require("minitest/autorun")
require_relative("testing_task_2")

class TestTesting < MiniTest::Test

  def test_func1()
    assert_equal(true, func1(1))
  end

  def test_looper()
    assert_equal(10, looper)
  end

  def test_max()
    assert_equal(50, max(5, 50))
  end

end
