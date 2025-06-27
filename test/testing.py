import unittest
import frappe

# ===== MODULE-LEVEL ERRORS =====
# These will fail during import
from frappe import non_existent_import  # Will fail
undefined_variable_at_top = non_existent_global  # Will fail

class TestErrorDetection(unittest.TestCase):
    def test_attribute_errors(self):
        """Test undefined attributes/methods"""
        frappe.non_existent_method()  # Will fail
        self.non_existent_assert()  # Will fail

    def test_name_errors(self):
        """Test undefined variables"""
        print(undefined_variable)  # Will fail

    def test_syntax_errors(self):
        """Test syntax issues"""
        return (1 + 2  # Missing closing parenthesis

# ===== FORCE TEST EXECUTION =====
if __name__ == "__main__":
    print("=== Running tests directly ===")
    unittest.main(failfast=True)