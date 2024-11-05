# Copyright (c) 2024, Ahmed and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator


class AirplaneFlight(WebsiteGenerator):
    def on_submit(self):
        # CALL FUNCTION TO UPDATE THE STATUS OF DOC TO COMPLETED ON SUBMIT
        self.update_status_to_completed()

    def update_status_to_completed(self):
        self.status = "Completed"

