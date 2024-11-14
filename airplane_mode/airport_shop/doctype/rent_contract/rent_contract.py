# Copyright (c) 2024, Ahmed and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RentContract(Document):
	pass
	
@frappe.whitelist()
def get_preivios_app_data(name):
    data = {}
    # Fetch data from another doctype
    appdata = frappe.get_doc('Rent Request', name)  
    if appdata:
            data['shop_name'] = appdata.shop_name
            data['shop_number'] = appdata.shop_number
            data['shop_price'] = appdata.shop_price
            data['airport'] = appdata.airport
            data['shop_area'] = appdata.shop_area
            data['shop_status'] = appdata.shop_status
            data['tenant'] = appdata.tenant
            data['tenant_phone'] = appdata.tenant_phone
            data['tenant_email'] = appdata.tenant_email
            data['contract_start_date'] = appdata.contract_start_date
            data['contract_expiry_date'] = appdata.contract_expiry_date
        
    return data