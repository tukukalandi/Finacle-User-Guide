export interface ProcedureSection {
  id: string;
  sectionNumber: string;
  title: string;
  categoryId: string;
  content: string;
}

export interface Category {
  id: string;
  name: string;
  moduleId?: string;
}

export const CATEGORIES: Category[] = [
  { id: 'cif_general', name: 'CIF Creation & Verification', moduleId: 'cif' },
  { id: 'cif_mod', name: 'CIF Modification & Merger', moduleId: 'cif' },
  { id: 'general', name: 'General & Rules', moduleId: 'rd' },
  { id: 'account_open', name: 'Account Opening', moduleId: 'rd' },
  { id: 'deposits', name: 'Deposits (Installments)', moduleId: 'rd' },
  { id: 'si', name: 'Standing Instructions (SI)', moduleId: 'rd' },
  { id: 'loan', name: 'Loans & Withdrawals', moduleId: 'rd' },
  { id: 'closure', name: 'Account Closure & Maturity', moduleId: 'rd' },
  { id: 'bulk_agent', name: 'Bulk Posting & Agents', moduleId: 'rd' },
  { id: 'qa', name: 'Questions & Answers', moduleId: 'rd' },
  { id: 'scss_general', name: 'Account Opening', moduleId: 'scss' },
  { id: 'scss_closure_interest', name: 'Closure & Interest', moduleId: 'scss' },
  { id: 'scss_mod', name: 'Modifications & TDS', moduleId: 'scss' },
  { id: 'sb_general', name: 'Opening, Modification & Verification', moduleId: 'sb' },
  { id: 'sb_transactions', name: 'Transactions & Rectification', moduleId: 'sb' },
  { id: 'sb_cheque', name: 'Cheque Book & Stop Payment', moduleId: 'sb' },
  { id: 'sb_passbook_inquiry', name: 'Passbook & Inquiries', moduleId: 'sb' },
  { id: 'sb_closure_transfer', name: 'Scheme Transfer & Closure', moduleId: 'sb' },
  { id: 'mis_general', name: 'MIS General & Opening', moduleId: 'mis' },
  { id: 'mis_closure', name: 'MIS Interest & Closure', moduleId: 'mis' },
  { id: 'mis_td_scss', name: 'Common Issues & Procedures', moduleId: 'mis' },
  { id: 'td_general', name: 'TD General & Opening', moduleId: 'td' },
  { id: 'td_closure', name: 'TD Interest & Closure', moduleId: 'td' },
  { id: 'td_mis_scss', name: 'Common Issues & Procedures', moduleId: 'td' },
  { id: 'scss_td_mis', name: 'Common Issues & Procedures', moduleId: 'scss' },
  { id: 'ssa_general', name: 'SSA General & Opening', moduleId: 'ssa' },
  { id: 'ssa_deposit_withdrawal', name: 'Deposit, Withdrawal & Funding', moduleId: 'ssa' },
  { id: 'ssa_claim', name: 'SSA Claim Procedure', moduleId: 'ssa' },
  { id: 'inv_movement', name: 'Inventory Movement', moduleId: 'inventory' },
  { id: 'inv_cheque_split_merge', name: 'Splitting & Merging', moduleId: 'inventory' },
  { id: 'inv_ho_to_so', name: 'HO to SO Movement', moduleId: 'inventory' },
  { id: 'inv_inquiry', name: 'Inventory Inquiry', moduleId: 'inventory' },
  { id: 'inv_cheque_mgt', name: 'Cheque Book Management', moduleId: 'inventory' },
  { id: 'inv_atm_mgt', name: 'ATM Card Management', moduleId: 'inventory' },
  { id: 'ppf_general', name: 'Account Opening & Deposits', moduleId: 'ppf' },
  { id: 'ppf_loan', name: 'Loan & Repayment', moduleId: 'ppf' },
  { id: 'ppf_withdrawal_closure', name: 'Withdrawal & Closure', moduleId: 'ppf' },
  { id: 'ppf_transfer', name: 'Bank Transfers', moduleId: 'ppf' },
  { id: 'nsc_kvp_general', name: 'General Information & Rules', moduleId: 'nsc_kvp' },
  { id: 'nsc_kvp_opening', name: 'Account Opening', moduleId: 'nsc_kvp' },
  { id: 'nsc_kvp_closure', name: 'Account Closing', moduleId: 'nsc_kvp' },
  { id: 'nsc_kvp_misc', name: 'Duplicate Certificate & Details', moduleId: 'nsc_kvp' },
  { id: 'menus_list', name: 'Menu List', moduleId: 'menus' },
  { id: 'common_txn_main', name: 'Common Transactions', moduleId: 'common_txn' },
  { id: 'common_issues_main', name: 'Common Issues & Fixes', moduleId: 'common_issues' },
];

export const SECTIONS: ProcedureSection[] = [
  // SECTION - 7 CIF
  {
    id: '1.1',
    sectionNumber: '1.1 & 7.2',
    title: 'About CIF & Searching (CDEDUP)',
    categoryId: 'cif_general',
    content: `
# 1.1 About CIF
Customer Information File (CIF) is a unique record of every customer stored in the system. Every individual needs to have a CIF ID to open an account. A customer may have many accounts, but can only have one CIF ID.

# 1.2 Searching a CIF of a customer
When any CIF is created in a CBS post office, that CIF can be found using the following procedure:

1. **Menu:** \`CDEDUP\` - Click **Go**
2. Search by the 10 criteria (*Last name mandatory).
3. Click **Proceed**.

Use more filters (Postal code, PAN Number, Date of Birth, Preferred Phone No.) for a more refined search if there are multiple matches with the same name.
`
  },
  {
    id: '1.3',
    sectionNumber: '1.3',
    title: 'New CIF Creation (CCRC)',
    categoryId: 'cif_general',
    content: `
# 1.3 New CIF Creation

1. **Menu:** \`CCRC\` – Click **Go**
2. **Function:** Select **Add** – Click **Go**
3. **Title:** Click Searcher. Select from the list (MR/MRS/MS etc.).
4. Enter **First name** and **Middle name** (if any).
5. **Last name:** Enter last name (if there is no last name, enter first name in the last name field).
6. **Fathers/Husband name:** Full name has to be given.
7. **Tax status:** Select "No PAN Card/PAN card available". Enter PAN if available.
8. **Date of birth:** Enter and click outside. In case of Minor, enter in DD-MM-YYYY format.
9. **Minor flag:** Automatically selected to "Yes" based on DOB. If Minor is under 10 years, provide Guardian CIF (must be created first). Dummy guardian CIF: \`300668762\`.
10. **Gender:** Male/Female/Others.
11. **KYC Status:** Select \`S-Document Submitted\`.
12. **Occupation type:** Select Salaried/Business/Self Employed etc. (Select 'others' if not mentioned in AOF).
13. **Document details 1:** Document type \`ADPRF\`, Document code (\`ADHAR\`/\`CERTI\`/\`VOTID\` etc.), Unique ID.
14. **Document details 2:** Document type \`IDPRF\`, Document code \`PANCD\` (if PAN is given).
15. **Address details 1:** Enter Address Line 1, Pin, City, State, Country.
16. **Phone Type:** Select Mobile. Enter phone number.
17. **Tax Deducted at Source Table code:** Select \`NOTAX\` / \`NOPAN\` / \`TDSNR\`.
18. Click **Submit/F10**.

**Note:** Note down the 9-digit CIF Number immediately!
`
  },
  {
    id: '1.4',
    sectionNumber: '1.4 to 7.8',
    title: 'CIF Verification, Modification & Error Handling',
    categoryId: 'cif_general',
    content: `
# 1.4 CIF Verification Process - By Super
1. **Menu:** \`CCRC\` - Click **Go**
2. **Function:** Verify – Click **Go**
3. Enter the **CIF ID**. Click **Submit**, if everything is entered properly. Click **Cancel** if there is anything wrong - click OK.

# 1.5 On verification if Supervisor found a mistake
Supervisor has to cancel the verification process by clicking the Cancel button instead of Submit. Follow the below described points to rectify the error.

**CIF Rejection – Done by Super**
1. **Menu:** \`CCRC\` - Click **Go**, **Function:** Rejection
2. Enter the **CIF ID** Click **Go**
3. Enter **Rejection reason** (may be found near Risk category)
4. Click **Submit**

**CIF Modification (Before verification) – Done by the same PA who has created the CIF ID**
1. **Menu:** \`CCRC\` - Click **Go**, **Function:** Modification
2. Enter the **CIF ID** – Click **Go**
3. Modification done by PA
4. Click **Submit**

**CIF Verification – Verify the CIF by Super modified by PA**
1. **Menu:** \`CCRC\` - Click **Go**, **Function:** Verify
2. Enter the **CIF ID** – Click **Go**
3. Click **Submit**, if everything is entered properly.

# 1.6 Process of modification of CIF (Modification of existing CIF or migrated CIF)
- Done by Counter PA
- Preferably **CIF of SB Account** to be taken for modification.
- All the information like PAN, Fathers name/Husband name, Date of Birth, Gender, KYC status, Document details 1 (Address Proof), Document details 2(Identity Proof), address if not correct, mobile number, TDS Table code or any other fields needs to be modified.
- After Modification CIF must be verified by supervisor.
- This CIF has to be given to the Customer for further investment purpose.

1. **Menu:** \`CMRC\` - Click **Go**
2. **Function:** Modification
3. Enter the **CIF ID** – Click **Go**
4. Modify required fields (e.g., DOB, Gender, KYC Status, Address, Phone, PAN, Document details). 
    - **Document details 2/3:** Select type \`ADPRF\`/\`IDPRF\`, enter Unique ID. For Aadhaar click UID authenticated "Yes". For PAN select \`PANCD\`.
    - **Preferred Flag:** Make any one of the documents status "Yes".
    - **Phone Type:** Select Mobile. Enter Mobile Phone no. only.
    - **Tax Deducted at Source Table Code:** Select \`NOTAX\`/\`NOPAN\`/\`TDSNR\` as applicable.
    - **Tax Status:** "PAN card available" if PAN submitted.
5. Click **Submit** button after doing the proper modification.

# 1.7 Verification Process After Modification - By Supervisor
1. **Menu:** \`CMRC\` - Click **Go**
2. **Function:** Verification
3. Enter the **CIF ID** – Click **Go**
4. **Submit**

# 1.8 Situations – When CIF has to be Modified
1. **On Death** – Procedure shown in Section 7.9
2. **Minor became Major** – Take fresh KYC Docs & Minor flag changed to "No".
3. **Name Change** - Procedure shown in Section 7.14
4. **Address change** – Procedure shown in Section 7.6
5. **Addition of PAN**– Procedure shown in Section 7.6
6. **Addition or Modification of Mobile Number** – Procedure shown in Section 7.6
7. **Net Banking or Mobile Banking Status** – Enable Net Banking/Mobile Banking status – "Yes"
`
  },
  {
    id: '1.14',
    sectionNumber: '1.9 to 7.14',
    title: 'CIF Modifications, Merger & Inquiries',
    categoryId: 'cif_mod',
    content: `
# 1.9 Modification of CIF in case of Death/Death Marking
1. **Menu:** \`CMRC\` - Click **Go**
2. **Function:** Modify
3. Enter **CIF ID** – Click **Go**
4. **Customer Status:** Deceased
5. Enter **Date of Death**
6. **Submit**

*Supervisor has to verify using same menu \`CMRC\`, Function verify, Enter CIF, Go, Submit.*

# 1.10 Changing The CIF ID of Main (first) Account Holder on account of Death or Account transfer
1. **Menu:** \`HCCA\` - Click **Go**
2. **Function:** Modify
3. **A/c ID:** Enter the A/c ID on which action needed.
4. Click **Go**. New window opens.
5. **New CIF ID:** Enter the CIF ID under which A/c is to be transferred.
6. **Modify A/c Name:** Select "Yes" ("Yes" to be selected in case of Death and Certificate Transfer).
7. **Reason code:** Select \`D\` in case of death claim or \`T\` in case of Certificate Transfer.
8. Click **Submit**.

# 1.11 Verification of Merger
1. **Menu:** \`HCCA\`, Function: Verify
2. Enter **A/c ID**, **Go**, **Submit**.

# 1.12 Merger of CIF (in case more than one CIF exits of a customer)
1. **Menu:** \`HCCA\` - Click **Go**
2. **Function:** Modification
3. **A/c ID:** Enter the A/c ID on which action needed – Click **Go**
4. **New CIF ID:** Enter the CIF ID under which A/c is to be transferred
5. **Modify A/c Name:** No
6. **Reason code:** Select \`C\` for CIF Duplicate Transfer.
7. Click **Submit**

*Supervisor to verify with the same menu \`HCCA\` (See Section 7.11).*

# 1.13 Inquire the accounts opened under one CIF ID
1. **Menu:** \`HCRV\` - Click **Go**
2. Click **Accounts** TAB to open Accounts page.
3. Enter the **CIF ID** and Click **Go**

# 1.14 Name Change in CIF & Account Number
Name of CIF can be changed. But it will not get effected in Account Level as this CIF is already been linked. For changing the name in all the accounts also, following steps have to be done:
1. Modification of Name at CIF Level- Menu \`CMRC\`
2. Verification of CIF – Menu \`CMRC\`
3. Modification of Account Name at Account Level – Menu \`HAALM\`
4. Verification of Account Name change – Menu \`HAALM\`
Every account under the CIF has to be changed using the menu \`HAALM\`.

**7.14.1 Name change in CIF level**
1. **Menu \`CMRC\`**. Click **Go**
2. **Function:** Modify
3. **CIF ID:** Enter the CIF ID for which name has to be changed.
4. Click **Go**.
5. Do the required changes in name.
6. **Submit**.
7. Verification to be done using the same Menu \`CMRC\`, Function- Verify, Enter CIF ID, Go, after checking, click Submit.

**7.14.2 Name change in Account level**
1. **Menu:** \`HAALM\`, Click **Go**
2. **Function:** Modify
3. **A/c ID:** Enter A/c no in which name change required.
4. Click **Go**. New window opens.
5. **A/c Name:** Enter the proper name of the account here.
6. **A/c Short Name:** Enter as required.
7. Click **Submit**.
8. An **EXCEPTION** will be shown, click Accept button. A message will come "A/c ID .............Modified successfully."
9. **Verify** with Super, same Menu \`HAALM\`, Function Verify, Enter A/c ID, Submit in the next screen, An EXCEPTION will come. Click Accept.

# 1. CCIFINQ (Comprehensive CIF Inquiry)
**Use of the Menu:**
CCIFINQ is primarily used to perform a fast, comprehensive check on critical identity linkages within a customer's profile. It is widely used by operational staff to verify whether a customer's vital communication and identification markers—specifically their Mobile Number and Aadhaar/National ID details—are correctly seeded and updated in the CIF profile.

**How to Operate in Finacle:**
1. **Invoke Menu:** Type \`CCIFINQ\` in the Finacle command field and press **Enter**.
2. **Input Criteria:** The screen will request the customer tracking parameters. You can enter the individual CIF ID or search via linked identity attributes if available.
3. **Execute Search:** Click on the **Go** button (or press F4).
4. **Information Retrieval:** The system will populate the interface displaying tabs for basic data. You can instantly toggle between details to confirm if the Aadhaar Card number or verified Mobile Number matches the physical KYC documents submitted by the client.
5. **Exit:** Click **Close** or press F3 to return to the main dashboard.

# 2. CICD (Customer Identity/Scheme Details Check)
**Use of the Menu:**
CICD is an incredibly handy and frequently utilized trace menu in core banking operations (such as in Department of Post Finacle environments). It allows operators to instantly cross-reference an individual account with its parent core profile to pull up comprehensive tracking data. It is specifically used to verify:
* Permanent Account Number (PAN details)
* Aadhaar Number
* Mobile Number
* Enrollment statuses in regulatory social security schemes (e.g., PMJJBY, PMSBY, etc.)

**How to Operate in Finacle:**
1. **Invoke Menu:** Type \`CICD\` in the shortcut bar and press **Enter**.
2. **Primary Entry:** The system will display a prompt asking for two specific fields: Account Number or CIF ID.
3. **Auto-Population Shortcut:** Enter the customer's active Account Number and press the **Tab** key. The system will automatically fetch and auto-fill the corresponding CIF ID box.
4. **Execute:** Click on the **Go** button.
5. **View Profiles:** Finacle will pull up a clean consolidated look of the customer's personal records. Staff can immediately audit the active tabs to check if a PAN card is missing or verify the customer's registered scheme enrollments on a single page.

# 3. HCRV (Customer Relationship View)
**Use of the Menu:**
HCRV acts as a centralized 360-degree look into a customer’s entire footprint across the financial institution. Instead of just showing simple demographics, it binds all relationships established under one specific CIF ID. It allows a user to simultaneously check basic personal details and list every active or closed account (Savings, Current, Time/Term Deposits, Loans, or recurring liabilities) tied directly to that customer.

**How to Operate in Finacle:**
1. **Invoke Menu:** Input \`HCRV\` into the menu selection panel and press **Enter**.
2. **Identify Target:** Input the customer's unique CIF ID. If you don't know the exact ID, you can use the searcher function icon next to the field to run a name/national ID search.
3. **First-Stage Go:** Click **Go**. The system will resolve the database entry and display the customer's registered primary name.
4. **Deep-Dive Navigation:** Click **Go** a second time to unlock the internal profile environment.
5. **Account Mapping Extraction:** Navigate to the **Account Tab** within the HCRV interface window and click **Go**.
6. **Review Results:** The system will display a comprehensive list of all operational sub-accounts linked to that master CIF ID, complete with individual account statuses and balances.
7. **Exit:** Click **Cancel / Close** or press F3 to safely exit the inquiry mode.
`
  },
  // GENERAL & RULES
  {
    id: '2.1',
    sectionNumber: '2.1',
    title: 'About Recurring Deposit',
    categoryId: 'general',
    content: `
# 2.1 About Recurring Deposit

* The customer can open an RD account for a fixed amount and for a fixed period of **60 months**. After 60 months it can be further **extended for the period of 60 months** where there will be no default installment.
* An RD account can be opened for single or with joint holders with nomination facility. There will not be any nomination facility provided for minor accounts. Joint account can be opened by two adults.
* Account can be opened in the name of minor. A minor of 10 years and above age can open and operate the account. Minor after attaining majority has to apply for conversion of the account in his name.
* Single account can be converted into Joint and Vice Versa.
* Any number of accounts can be opened in any post office.
* Account can be transferred from one post office to another.
* The **minimum deposit** installment amount for opening a RD a/c is **Rs.10/- per month** and **in multiples of Rs.5/-** and there is no maximum limit.
* Account can be **opened** by cash/cheque. In case of opening by cheque the **date of deposit of the cheque shall be date of presentation of cheque**.
* In case of **deposits** made in RD accounts by Cheque, **date of credit of Cheque into Government accounts shall be treated as date of deposit**.
* **Interest Rates (Current Financial Year):** The interest rate for the 5-Year Post Office Recurring Deposit is **6.7% per annum** (quarterly compounded), as per the latest government notifications. For an account with a monthly contribution of INR 100/-, the maturity value will be according to the currently prevalent 6.7% rate.
* If the RD deposit installment has not been made within due date, it is considered as default installment. For example, an RD account was opened during 1st to 15th of a month, and then the next RD instalment can be paid anytime till the 15th of the succeeding month. If the RD was opened during 16th to 30th / 31st of any month, then the next RD installment can be paid anytime till the 30th / 31st of the succeeding month.
* In case of more than **four defaults** the account will be treated as **discontinued** and revival of such an account will be permitted within a period of **two months from the month of fifth default**. Interest at the rate of **5 paisa, for every five rupees** of a defaulted installment **for each month** of default, will also to be paid along with such deposit in lump sum. If the default deposit installment should not happen within these two months, the a/c will freeze by the system. An account where such defaulted installments are not deposited shall be treated as a discontinued RD.
* **Rebate** on installment amounts are allowed to accounts where some installments are received in advance. There should not be any discontinuity in earlier installments paid. A minimum of **6 installments** are accepted in advance for availing the benefit of rebate. The rebates are slab based.
* Full maturity value allowed on R.D. Accounts restricted to that of INR. 50/- denomination in case of death of depositor subject to fulfilment of certain conditions.
* **A pre-mature closure of an RD account is allowed only after 3 years.**
`
  },
  
  // ACCOUNT OPENING
  {
    id: '2.2',
    sectionNumber: '2.2',
    title: 'RD Account Open',
    categoryId: 'account_open',
    content: `
# 2.2 RD Account Open

> **Note:** While opening RD a/c instalment amount will be in Entered level and agent commission will be in Posted level.

1. **Menu:** \`CRDOAAC\` – Click **Go**
2. Enter the **CIF ID**
3. **Scheme code:** Select from searcher. Click the searcher then Click Submit. Now select the scheme as \`RDIPN\`. The scheme code \`RDIPN\` can be entered directly by typing also.
4. Click **Go**
   *A new screen will come. All the data of the customers as per the CIF id will get populated automatically.*
5. **Mode of Operation:** Select from searcher \`012\`/\`016\`/\`017\` etc.

**Under Scheme details:**
6. **Value date:** Enter **Date of presentation of cheque**, if open by cheque.
   *Enter BO open date in case BO RD open.*
7. **Monthly Installment amount:** Enter amount, maturity value will be shown.
8. Select **Agent Radio button** if agent attached.
9. **Sourcing Dealer ID:** Select Agent ID from searcher if any Agent attached.

**Under Transaction details:**
10. **No of Installment:** Enter no. of installment the customer wants during opening an Account. **Usually it is 1**. If anybody wants to open the RD by depositing advance deposit enter 6/12/24 months etc. *Minimum 6 months advance has to be given to get 1% rebate. To get 4% rebate 12 months advance has to be given. The rebate will show.*
11. **Transaction type:** Select **Cash or Transfer** option.
12. **Debit A/c ID:** Enter A/c ID
    * a) In case of fund transfer from SB A/c, Select Transfer & Enter **Debit A/c ID** as **SB A/c ID** of customer.
    * b) In case of A/c open by Non DOP Cheque, Select Transfer & Enter **Debit A/c ID** as \`SOL0382\` office account here after checking the credit amount in this office account.
    * c) In case of A/c open by DOP cheque, Select Transfer & Enter SB Account no of the cheque.
    * d) In case of BO RD A/c open, Select Transfer & Enter **Debit A/c ID** as \`SOL0339\` office account
13. In case account open by **DOP cheque**, enter Cheque number in **Instrument alpha/Sl no** and cheque date in **Instrument date**.

**Under Document details:**
14. **Account documents received:** Select **Yes**
15. **Number of documents received:** Enter **1** (as only AOF has been submitted by customer)
16. **Document Details 1:** Only Document details 1 to be filled up
    * i) Select document code from Searcher (016)
    * ii) Enter document Date (current date)
    * iii) Scan details: Select Scan not required
    * iv) Documents Status: Select Sent to CPC
17. Enter **Related Party details 2**, If the mode of operation is 016/017 (joint account). Same as explained in case of SB Account opening.
18. **Nomination:** If Nominee exists Click **"Yes"**. Note Nominee No. on AOF.
19. Enter nominee details – If CIF of nominee exists enter CIF. All the details will come. Otherwise enter Name, Address, Pincode. Enter **Country** (IN/INDIA), **Relationship** and **Nominee pct** (100 in case of single nominee). *Nominee pct => Nominee percentage*.
20. If nominee is minor Select **Nominee Minor** as **"Yes"**. Enter Date of Birth. Enter **Guardian details**.
21. Click **Submit**.
22. Flow page will come. Click **Submit** again.
23. **RD Ac ID** will be generated note it on AOF.
`
  },
  {
    id: '2.3',
    sectionNumber: '2.3',
    title: 'Verification of RD Account Open',
    categoryId: 'account_open',
    content: `
# 2.3 Verification of RD Account Open

1. **Menu:** \`CRDOAACV\` – Click **Go**
2. **Function:** V-Verify
3. Enter the **A/c ID**
4. Click **Submit**
   *One message will come "No DSA attached to this account" if no agent is attached. Click **Ok**.*
`
  },

  // DEPOSITS
  {
    id: '2.4',
    sectionNumber: '2.4',
    title: 'RD Installment Deposit when Account stands at HO/SO',
    categoryId: 'deposits',
    content: `
# 2.4 RD Installment Deposit when Account stands at HO/SO

> **Note 1:** Any RD deposit transaction will be in Entered State. In case of wrong deposit made, transaction may be deleted using Delete function. After verification of RD deposit transaction, amount is posted in ledger and verified as well. So, after the verification the transaction can not be deleted.
> **Note 2:** If in any RD account, within the deposit period (1-15 or 16-last working day - which is applicable to the account) more than once, instalment is deposited and total instalment no is 6 or 12, rebate will be shown by the system.

1. **Menu:** \`CRDP\` – Click **Go**
2. **Function:** A-Add
3. **Transaction Type:** 
   * Select **C/NR-Cash Deposit** if RD is deposited by cash
   * Select **T/CI- Customer Induced** if RD is deposited by POSB cheque/ Other Bank Chque/Transfer from SB account
4. Click **Go**. A new screen will come.
5. **RD A/c ID:** Enter RD account no. and click **outside**.
6. **Total Amount:** Enter installment amount. More than one installment amount can be given. In case of advance installment deposit also, enter total deposit amount and not the amount after the rebate or default, if any. Rebate & default fee will be calculated by the system. In case of discontinued account (6 monthly installments are not paid) the system will show error *"Credit account is in invalid status or Total Frozen"*.
   *No of installment, Transaction amount, Rebate amount and default fee if any will show automatically on entering the amount.*

* **In case of Deposit made by DOP Cheque:** 
  * i) **Mode of payment:** Select **Cheque** option. 
  * ii) Enter **Cheque date**
  * iii) **Cheque Num:** Enter Cheque Number 
  * iv) **Account ID:** Enter SB account No of the cheque. 
  * v) **Transfer Amount:** Enter Transaction amount shown in the above panel.

* **In case of Deposit made by Non DOP Cheque:** 
  * i) **Mode of payment:** Select **Transfer** option 
  * ii) **Value date:** Enter cheque encashment date. 
  * iii) **Account ID:** \`SOLID0017\` 
  * iv) **Transfer Amount:** Enter Transaction amount shown in the above panel.
  * *[Note: Cheque amount must be equal to transaction amount. Before preparing cheque ensure the exact transaction amount. Cheque to be lodged in \`SOLID0017\` office a/c. After clearance of the cheque, office a/c must be checked to see, whether amt credited to this a/c. The whole procedure must be completed within last payment date of the RD account.]*

* **In case of Deposit made by Account Transfer:**
  * i) **Mode of payment:** Select **Transfer** option 
  * ii) **Account ID:** Enter SB account No. 
  * iii) **Transfer Amount:** Enter Transaction amount shown in the above panel.

7. Click **Submit**, Transaction ID will be generated.
`
  },
  {
    id: '2.5',
    sectionNumber: '2.5',
    title: 'RD instalment deposit verification',
    categoryId: 'deposits',
    content: `
# 2.5 RD instalment deposit verification

1. **Menu:** \`CRDP\` – Click **Go**
2. **Function:** Post
3. **Transaction ID:** Enter Transaction ID
4. Click **Go**
5. Check and **Submit**
`
  },
  {
    id: '2.6',
    sectionNumber: '2.6',
    title: 'RD Installment Deposit when Account stands at BO',
    categoryId: 'deposits',
    content: `
# 2.6 RD Installment Deposit when Account stands at BO

1. **Menu:** \`CRDP\` – Click **Go**
2. **Function:** A-Add
3. **Transaction Type:** Select **T/BI – Transfer Bank Induced**.
4. Click **Go**. A new screen will come.
5. **RD A/c ID:** Enter RD account no. and click outside.
6. **Total Amount:** Enter installment amount, more than one installment amount can be given.
   *No of installment, Transaction amount, Rebate amount and default fee if any will show.*
7. **Value date:** Enter BO transaction date. **[Be cautious about the date]**
8. **Mode of payment:** Select **Transfer** radio button.
9. **Account ID:** Branch settlement A/c no (\`SOLID0339\`)
10. **Transfer Amount:** Enter transaction amount figure shown above.
11. Click **Submit**, Transaction ID will generate.
12. Super to verify the transaction using same menu \`CRDP\`. Function – **POST**.
`
  },

  // STANDING INSTRUCTIONS
  {
    id: '2.7',
    sectionNumber: '2.7',
    title: 'Standing Instruction Overview',
    categoryId: 'si',
    content: `
# 2.7 Standing Instruction

* **SI always initiates from SB Account.** From one SB account funds may be transferred to another SB or an RD account or multiple RD account. It may also be transferred from one SB account to Multiple SB Account or from Multiple SB account to a Single SB account.
* Standing Instructions (SI) is a facility for the account holders who want to make payments or remittances of a recurring nature, like transfer of funds, instalments for a recurring deposit or a loan account and so on.
* Customers may give standing instructions to the Post Office to make payments or remittances on their behalf on a specified date.
* Customers can give certain conditions, which needs to be satisfied before making these payments.
* Standing instructions are automatically executed by the system based on certain criteria: Date, time on which it should occur during the given period.
* A report is available in \`HFINRPT\` for generating LOT related to SI on transfers from SB accounts to RD accounts.
`
  },
  {
    id: '2.8',
    sectionNumber: '2.8',
    title: 'SB to RD SI Procedure',
    categoryId: 'si',
    content: `
# 2.8 SB to RD SI Procedure

1. **Menu:** \`HSSIM\` – Click **Go**
2. **Function:** Select **A-Add**
3. Click Go/ Press F4. *A new screen/window will come.*
4. Enter **CIF ID** of **SB A/c ID** (amount will be debited from this account)

**Under execution details** - Enter SI Frequency, Execution time & Next execution date:
5. Select **M-Monthly**
6. Select execution Date from the list - **15**
7. **Holiday:** Select **Previous day**
8. **Execution time:** Select **After change of date**
9. **Next Execution date:** Enter 15th of the next execution month (start date of SI)
10. **End Date:** Enter the last RD installment payment date (should be 15th of the month)
11. Click **Instruction details Tab/page** (Debit option will be selected automatically)
12. Select **CCY** from Searcher as **INR**
13. Enter **Debit A/c ID** (SB A/c No)
14. **Amount type:** Fixed
15. Enter **Amount**
16. Click **Add** Button
17. Select **CCY** from Searcher as **INR**
18. Enter **Credit A/c ID** (RD A/c No)
19. Select **Credit** option
20. **Amount type:** Fixed
21. Enter **Amount**
22. Click **Validate**
23. **Submit**. 

*Standing Instruction No will be generated. Note it.*
`
  },
  {
    id: '2.9',
    sectionNumber: '2.9',
    title: 'SB to RD SI Verification',
    categoryId: 'si',
    content: `
# 2.9 SB to RD SI Verification

1. **Menu:** \`HSSIM\` – Click **Go**
2. **Function:** Select **V-Verify**
3. Enter Standing Instruction no. Starting with \`IN\`
4. Click **Go**. A new screen/window will come
5. Visit **Instruction details Page** & Check the entries made are correct.
6. **Submit**
`
  },
  {
    id: '2.22',
    sectionNumber: '2.22',
    title: 'Deleting SI linked to RD',
    categoryId: 'si',
    content: `
# 2.22 Deleting SI linked to RD

1. **Menu:** \`HSSIM\` – Click **Go**
2. **Function:** D-Delete
3. Click on the **searcher** of Standing Instruction Srl. No box if SI srl. no not known.
4. Enter **RD account number** in **A/c ID**
5. Enter **CIF ID**.
6. Click **Submit**
7. Standing instruction number will be shown. Click it to select.
8. Click **Go**
9. Details of the SI will show. Visit the **Instruction details TAB** also and **Submit**.
10. Verify the deletion with **Super**. Same menu \`HSSIM\`. Function - **verify**.
`
  },

  // LOANS AND WITHDRAWALS
  {
    id: '2.10',
    sectionNumber: '2.10',
    title: 'About Loan/Half Withdrawal against RD',
    categoryId: 'loan',
    content: `
# 2.10 About Loan/Half Withdrawal against RD

* **Only one loan/half withdrawal** against RD account would be allowed during the tenure of the account.
* For loan/half withdrawal against Recurring Deposit, **amount not exceeding 50%** of the outstanding balance in the account can be sanctioned minimum after one year of A/c opening where minimum twelve deposit instalments are collected.
* Loan/Half Withdrawal against RD should be **in multiple of Rs. 5** and shall be repaid either in one lump sum amount or equal monthly instalments.
* The number of loan/Half Withdrawal installments shall not exceed the number of months remaining for maturity of the account or the post maturity period for which account is continued.
* In case of repayment in one lump sum or equal monthly installments, interest shall be calculated on the amount of withdrawal for full calendar months from the month of withdrawal to the month of repayment irrespective of the date on which the amount is withdrawn or repaid. If the repayment with interest is made on or before 10th of a month, no interest shall be payable for that month.
* Loan accounts can be opened for Individuals or joint holders based on the RD account mode of operations.
`
  },
  {
    id: '2.11',
    sectionNumber: '2.11',
    title: 'RD Loan Account Opening',
    categoryId: 'loan',
    content: `
# 2.11 RD Loan Account Opening

1. **Menu:** \`CAOLARD\` – Click **Go**
2. Enter **RD A/c No** and click outside.
3. **CIF ID** of the given RD A/c shown automatically.
4. **Scheme code:** Select from searcher \`LARD\`
5. Click **Go**. A new screen will come.
6. Loan Amount is shown. **Amount can be decreased but can not be increased.**
7. **Installment frequency:** Select Bullet(Lump sum deposit)/Monthly
8. **Submit**. A message will come to check risk category. Click **Ok**

*Loan A/c no will be generated. This account no is original RD account no. suffixed by 1.*
`
  },
  {
    id: '2.12',
    sectionNumber: '2.12',
    title: 'Verification Of Loan Account Opening',
    categoryId: 'loan',
    content: `
# 2.12 Verification Of Loan Account Opening

1. **Menu:** \`CAOVLARD\` – Click **Go**
2. **Function:** V-Verify
3. Enter **RD loan A/c No.**
4. Click **Go**.
5. Check and **Submit**.
`
  },
  {
    id: '2.13',
    sectionNumber: '2.13',
    title: 'Disbursement of Loan',
    categoryId: 'loan',
    content: `
# 2.13 Disbursement of Loan

> **Warning:** If the office is migrated in the middle of the month (i.e. on or after 2nd of the month) **"Error P39"** will come at the time of verification of disbursement if the mode of payment is cash. This error will be thrown only in the month of migration and from the 2nd month cash mode can be used for repayment or disbursement. In case of Loan Disbursement or Loan Repayment, the value date will be automatically changed to 1st of the month as interest is calculated from the 1st of the month for loans. As Cash account of that office will not be available as on 1st (since the office has migrated in the middle of the month) this error is thrown.

**Solution for the "error P39":**
"In case of Loan disbursement – Instead of Cash (even if it is below Rs.20,000) select **Account Transfer** and show RD Loan Disbursement office account (\`SOL0323\`). Now:
* If customer want cheque (use \`CXFER\` menu: Debit Office a/c \`SOL0323\` and credit a/c \`SOL0340\`).
* If customer want cash (use \`CTM\` menu: Enter Office a/c \`SOL0323\`).
* If customer want transfer to SB account (use \`CXFER\` menu: Debit Office a/c \`SOL0323\` and credit SB A/c of customer).

**Disbursement Steps:**
1. **Menu:** \`LARDD\` – Click **Go**
2. **Function:** DISBURSEMENT
3. **Account number:** Enter **RD Loan A/c no** and click outside. Disbursable amount will be shown.
4. **Mode of Disbursement/Reversal:** Select Cash/Account transfer. If Account Transfer is selected enter **Credit Account no.** (SB A/c no of customer)
5. Click **Submit**. *"The selected action executed successfully"* message will come.
   *On Submit, If the error comes "CMSG001058 - Value date is more than the minimum value date for the account" change the **Value date** as **Open date** and **Submit** again.*
`
  },
  {
    id: '2.14',
    sectionNumber: '2.14',
    title: 'Disbursement of Loan Verification',
    categoryId: 'loan',
    content: `
# 2.14 Disbursement of Loan Verification

1. **Menu:** \`LARDD\` – Click **Go**
2. **Function:** VERIFY
3. **Account Number:** Enter **RD Loan A/c no**. Disbursable amount will be shown.
4. Click **Submit** [if any exception "Error code EC2" is thrown is shown click accept]. *"The selected action executed successfully"* message will come. Click **OK**.
`
  },
  {
    id: '2.15',
    sectionNumber: '2.15',
    title: 'Repayment of loan/part payment of loan',
    categoryId: 'loan',
    content: `
# 2.15 Repayment of loan/part payment of loan

> **Warning:** In case of repayment of loan also the **"error P39"** will come in case of cash mode, if the office migrated in the middle of the month (on or 2nd of the month). Avoid cash mode. Use transfer option and debit customer's SB account for payment of loan installment. From the 2nd month (after migration to CBS) onwards cash mode can be used for loan installment payment.

1. **Menu:** \`HLAUPAY\` – Click **Go**
2. **Payment type:** Payment
3. **Select Transaction type:** Select Cash
4. Click **Go**. A new screen will come.
5. **Loan A/c ID:** Enter Loan Account ID
6. **Credit amount:** Enter amount to be repaid
7. Click **Accept**.
   *Loan calculation will be shown below. If you want to modify the loan amount click on modify button and reenter the amount. Again click **Accept**.*
8. Click **Submit**. Transaction ID will be generated.
`
  },
  {
    id: '2.16',
    sectionNumber: '2.16',
    title: 'Repayment of loan verify',
    categoryId: 'loan',
    content: `
# 2.16 Repayment of loan verify

1. **Menu:** \`HLAUPAY\` – Click **Go**
2. **Function:** Verify
3. Enter Transaction ID
4. Click **Go**. A new screen will come. Check the Adjusted Amt column.
5. **Submit**. Click **Accept** when message come transaction posted successfully.
`
  },
  {
    id: '2.17',
    sectionNumber: '2.17',
    title: 'Closer of loan account',
    categoryId: 'loan',
    content: `
# 2.17 Closer of loan account

**Step 1: Final payment of loan amount + Loan Interest or only Loan Interest payment (Remaining Loan Amount if any + Loan Interest)**
There may be situation that customer wants to pay both Loan amount and loan interest when he/she is paying the last installment of loan or there may be situation that only loan interest payment is outstanding and customer wants to pay it. In both the situation the following procedure is to apply.

1. **Menu:** \`HPAYOFF\` – Click **Go**
2. **Function:** Payoff loan amount
3. **A/c ID:** Enter Loan Account ID
4. **Transaction type:** Cash Receipt or Transfer customer induced. If Transfer is selected enter **Customer's SB A/c ID** in Collect/Refund A/c ID
5. Click **Go**. A new screen will come.
6. Click **Create Transaction** button. Another screen will come.
7. Click **Submit**. A message will come that pay off done successfully click **Accept**.

**Step 2: Final payment of loan amount + Interest verification**
1. **Menu:** \`HPAYOFF\` – Click **Go**
2. **Function:** Verify
3. **A/c ID:** Enter Loan Account ID and Click **Go**
4. Click **Create Transaction** button.
5. Click **Submit**. A message will come that *"pay off done successfully"*. Click **Accept**.

**Step 3: Loan account closer**
1. **Menu:** \`CAACLA\` – Click **Go**
2. **Function:** Z-Close
3. **A/c ID:** Enter Loan Account ID
4. Click **Go**
   *System will display the outstanding if any and throws the errors if the account balances are not zerorised.*
5. **Submit**. System will give a message that loan account is closed. *"Closure of A/c no. Done successfully"*

**Step 4: Loan account closer Verification**
1. **Menu:** \`CAACLA\` – Click **Go**
2. **Function:** Verify
3. **A/c ID:** Enter Loan Account ID
4. **Submit**. System will give a message that loan account is closed. *"Closure of A/c no. verified successfully"*
`
  },

  // ACCOUNT CLOSURE
  {
    id: '2.18',
    sectionNumber: '2.18',
    title: 'About RD Account closer',
    categoryId: 'closure',
    content: `
# 2.18 About RD Account closer

* RD account closer may have different situations – only in case of normal maturity closer where PMI also not generated (1 month not elapsed after maturity) – Trial Close is not required.
* In all other cases **Trial closer of RD A/c is mandatory** to see the result.
* In case of death claim all the RD accounts stands in the name of the diseased person under the CIF will be closed. For that death marking in CIF is mandatory. Otherwise system will not allow closing the RD accounts.
* **If any SI exists in the RD accounts, that must be remove** also before closing. An error *"Closer pending on SI for the account"* will come otherwise.
* **If advance deposit** is made in an RD account, the same can not be closed even in case of death claim.
* In case RD closer in cash (below Rs. 20000/-) **cash pending transaction** (Menu - \`HCASHPND\`) has to be done.
* While closing RD accounts, Counter PA should be very careful. According to rule RD account can be closed only after 3 years. Finacle will allow closer within LOCK IN period. It will only through an EXCEPTION. Counter PA should not accept the EXCEPTION thrown.
* In case of maturity date falls on Holiday/Sunday, close the account only on NEXT day. If it is closed on previous day before Holiday/Sunday, it will be a premature closer and full interest will not be paid.
* RD account can not be closed if loan is not paid with interest. Lien exists for those RD accounts which has loan. First loan has to be paid with interest, then it can be closed.
* If only loan interest is also not paid only in migrated account, LIEN is imposed on RD account. If lien is placed against any RD account- *"The withdrawal amount exceeds the difference between the principal and Lien amount"* error may come while closing RD a/c. Inquire the LIEN amount using \`HACCBAL\`/\`HALM\`. Remove LIEN amount using \`HALM\` **after collecting lien amount from customer**.
* If any RD account is modified but not verified, *"A time stamp error occurred"* will come while closing the RD account. Verify the account with \`CRDACM\` menu then close.
`
  },
  {
    id: '2.19',
    sectionNumber: '2.19',
    title: 'RD Closer – Normal Matured Account',
    categoryId: 'closure',
    content: `
# 2.19 RD Closer – Normal Matured Account

1. **Menu:** \`CRDCAAC\` – Click **Go**
2. **Function:** Z-Close/T-Trial Close
3. **A/c ID:** Enter RD A/c no.
4. Click **Go**. New window opens.
5. Click **Close Check box**.
6. **Repayment mode:** Select cash/Transfer
7. Select **Closer Reason Code** from searcher [In case of Normal Closer: Select **NORML** option]
8. **Repayment A/c ID:** If Transfer is selected enter **Customer's SB A/c ID** or **Postmaster's Cheque A/c ID** (if customer wants cheque)
9. Click **Submit**. In case of trial closer result of Closer will be shown. \`HPR\` menu may be used to take report. In case of Actual closer account will be closed.

**In case of Z-Close (Actual closer)** this has to be verified by Super with the same menu \`CRDCAAC\`.
`
  },
  {
    id: '2.20',
    sectionNumber: '2.20',
    title: 'RD Death Claim Closer',
    categoryId: 'closure',
    content: `
# 2.20 RD Death Claim Closer

1. **Menu:** \`CRDCAAC\` – Click **Go**
2. **Function:** Z-Close/T-Trial Close
3. Select **death claim radio button "Yes"**
4. Enter **CIF ID** and click outside.
   *Date of death will come automatically (For that use \`CMRC\` menu to death mark the CIF first).*
5. Click **Go**. One message will come *"Account is eligible for PSS claim. Do you want to proceeed"*
6. Click **Ok** to continue. A new window open with all the RD accounts linked to the CIF
7. Select the first record showing RD account No.
8. Click **Close Check box**
9. **Repayment mode:** Select **Transfer only** [as it is death claim]
10. **Repayment A/c ID:** If Transfer is selected enter **Customer's SB A/c ID** or **Postmaster's Cheque A/c ID** (if customer wants cheque)
11. Select closer reason code from searcher as **DTCLM** (Death closer).
12. Click **Submit**. Result will be shown.

This has to be verified by Super with the same menu \`CRDCAAC\`.
`
  },
  {
    id: '2.21',
    sectionNumber: '2.21',
    title: 'Branch office RD Closer',
    categoryId: 'closure',
    content: `
# 2.21 Branch office RD Closer

1. On receipt of SB7A and Passbook from BO, PA should first invoke **Trial Closure** for issue of closing sanction. Same procedure should be followed as being followed for Trial Closure of RD Accounts standing at SO/HO in Finacle.
2. Enter closing amount in SB7A and after following laid down process of sanction of BO W/D, Passbook and SB7A should be sent to BO with the direction that sanction is valid only up to last working day of the month.
3. If customer does not attend BO up to that date, a fresh sanction is to be obtained by BO for which fresh Trail closure should be invoked.
4. Once paid SB7A signed by customer duly entered in BO daily Account is received at Account office, following process to be followed by counter PA:-

**Process in Finacle:**
1. **Menu:** \`CRDCAAC\` – Click **Go**
2. **Function:** Z-Close/T-Trial Close
   *Trial Close and Close procedures are same – **T-Trial close** has to be done before sending closing sanction. **Z-Close** has to be done at Account office (SO), after closer at BO.*

Same procedure to be followed in case of RD closer at HO/SO (Normal/Premature/Death claim) except the following:
3. **Repayment mode:** Select **Transfer** only
4. **Repayment A/c ID:** Enter Branch Settlement office account \`SOLID0339\`

This has to be verified by Super with the same menu \`CRDCAAC\` Transaction will appear in LOT and consolidation.
`
  },
  {
    id: '2.24',
    sectionNumber: '2.24',
    title: 'Different situations in RD Account closer',
    categoryId: 'closure',
    content: `
# 2.24 Different situations in RD Account closer

## A. Matured RD Closer

**I. No loan exists with the account/Loan is already paid fully with interest.**
* **Procedure:** \`CRDCAAC\` – RD Account closer menu only to be used.

**II. Loan (Principal+Interest) is not fully paid.**
* **Procedure:**
  * a) Use menu \`HPAYOFF\` to pay outstanding loan principal and loan interest and verify with the same menu.
  * b) Use menu \`CAACLA\` to close the loan account and verify.
  * c) Use menu \`CRDCAAC\` to close the RD account and verify.

**III. Loan principal is paid but Loan interest is not paid.**
* **a. Before migration period loan interest was due to be paid:**
  RD Loan account will not be created if the RD Loan Principal is fully paid. For RD Loan interest, LIEN will be marked for the corresponding RD account. Before closure, LIEN amount should be collected from the customer and LIEN to be removed by invoking the menu \`HALM\`. After that close the RD account using menu \`CRDCAAC\`.
* **b. After migration to CBS, loan taken, principal paid but loan interest is outstanding:**
  * i. Use menu \`HPAYOFF\` to pay outstanding loan interest and verify with the same menu.
  * ii. Use menu \`CAACLA\` to close the loan account and verify.
  * iii. Use menu \`CRDCAAC\` to close the RD account and verify.

## B. Premature RD closer (After 3 years)

**I. Loan is outstanding**
* Use \`CRDCAAC\` menu to close. No need to repay the loan principal and interest using \`HPAYOFF\`. System will automatically deduct the RD Loan amount and interest will be calculated on SB Rate of interest as per rule. Loan interest will not be calculated. RD Loan account balance will become 0 but will not be closed. Loan account with Zero balance should be remained as it is and not closed.

**II. Loan is not outstanding**
* Use \`CRDCAAC\` menu to close.

## C. RD Death closer

**I. Loan is outstanding**
* Death marking in CIF using Menu \`CMRC\`. Use \`CRDCAAC\` menu to close.

**II. Loan is not outstanding**
* Death marking in CIF using Menu \`CMRC\`. Use \`CRDCAAC\` menu to close.
`
  },
  {
    id: '2.27',
    sectionNumber: '2.27',
    title: 'RD Extension',
    categoryId: 'closure',
    content: `
# 2.27 RD Extension

RD Account can be extended for further period of 5 years. If there are pending installments, extension is not possible. Pending installment can be checked using menu \`HPLIST\`.

1. **Menu:** \`PRDCM\` – Click **Go**
2. **Function:** Continue
3. **A/c ID:** Enter Account No Of RD. Scheme will come automatically.
4. Click **Go**. New window opens.
5. **Continuation deposit tenure:** Enter 60
6. Click **Generate**
7. Click **Submit**
8. Verify the extension with the same menu \`PRDCM\` by Super. Function - **Verify**.
`
  },
  {
    id: '2.28',
    sectionNumber: '2.28',
    title: 'Maturity Date Deferment in RD account',
    categoryId: 'closure',
    content: `
# 2.28 Maturity Date Deferment in RD account

Customer has the liberty to have maximum of 4 defaults on the day of maturity. Maturity date can be deferred equivalent to the number of defaults using the menu \`PMDDRD\` (Maturity Date Deferment for Recurring Deposit). During the deferred period, defaults deposits can be paid without default fee. Verify it with super with the same menu.
`
  },

  // BULK POSTING & AGENTS
  {
    id: '2.23',
    sectionNumber: '2.23',
    title: 'Linking and Delinking RD agent from an account',
    categoryId: 'bulk_agent',
    content: `
# 2.23 Linking and Delinking RD agent from an account

## 2.23.1 Linking agent
1. **Menu:** \`CRDACM\` - Click **Go**
2. **Function:** Modify
3. Enter **RD A/c ID**, Click **Go**
4. **Select Agent/Employee Code:** Direct Sales Agent.
5. Click the **Sourcing Dealer ID** searcher and select from the list or directly type the Agent ID here.
6. **Submit**
7. Verify the modification with super – Same menu \`CRDACM\`. Function- **verify**.

## 2.23.2 De-Linking agent
1. **Menu:** \`CRDACM\` - Click **Go**
2. **Function:** Modify
3. Enter **RD A/c ID**, Click **Go**
4. **Select Agent/Employee Code:** None option.
5. **Submit**
6. Verify the modification with super – Same menu \`CRDACM\`. Function- **verify**.
`
  },
  {
    id: '2.25',
    sectionNumber: '2.25',
    title: 'Posting of Reference no. generated in Agent Portal (RD bulk posting)',
    categoryId: 'bulk_agent',
    content: `
# 2.25 Posting of Reference no. generated in Agent Portal (RD bulk posting)

* For bulk acceptance of RD deposits from MPKBY Agents/PRSS Leaders, an Agent Portal has been developed which can be accessed through **www.Indiapost.gov.in** website.
* Any RD account during opening or after opening can be attached with any MPKBY Agent/PRSS Leaders. Once account is attached to the agent, deposit cannot be accepted at the counter in that account unless depositor gives in writing to cancel the attachment with agent.
* During migration, all accounts already attached with a particular agent in Sanchay Post will be attached with the same agent in Finacle CBS application.
* All MPKBY agents will be issued Login ID and Password to operate Agent Portal.
* When agent logs in to Agent Portal, all live RD accounts attached with the agent will be visible to the agent. System will generate one **Reference number** against each List prepared in the Agent portal.
* When agent comes to the post office with printed List(s) with either cash/POSB Cheque/other Bank Cheques having Reference numbers against each list, Counter PA will enter the Reference number printed on the List and will be able to see the List(s) presented.
* Agent commission will be automatically credited into Agent's savings account after deducting the TDS on posting of such reference.

1. **Menu:** \`HAGTXP\` – Click **Go**
2. **Function:** M-Modify
3. Enter **Agent ID**
4. **E banking Ref no.:** Enter Ref no. from agent's report or select from the searcher.
5. Click **Go**. New window will come. RD installment amount, Default Fee and Rebate if any, will show at the bottom.
6. Click **Post** button
7. **Super to verify** with the same menu. Function - **Verify**, enter Agent id and Ref no.
   *If there is any problem in the schedule it will not show in the counter Posting but it will show when Super will verify. If the whole schedule has error it will reject. If some of the records have error then it will post only the correct records. Rest of the record will not show while verify by super. Round the rejected record in the agent schedule and return the cash. Ask the agent to bring fresh schedule or corrected schedule again.*
8. See the report through \`HPR\` menu. In \`HPR\` select the report **"Agent Portal Transaction Status report"**. Print the report. Tally with Agents Schedule.

> **Note:** After Posting and verification, agent commission will be credited to the SB account of the Agent. Counter PA has to check Agents SB a/c for confirmation whether correct agents commission is credited.
`
  },
  {
    id: '2.26',
    sectionNumber: '2.26',
    title: 'RD Bulk Posting by DOP and Non dop cheque',
    categoryId: 'bulk_agent',
    content: `
# 2.26 RD Bulk Posting by DOP and Non dop cheque

## 2.26.1 Posting by DOP Cheque
Agent While preparing the schedule will select payment mode as **DOP Cheque**. Cheque details has to be provided also. At the time posting by \`HAGTXP\` every details will be shown. **Post**.

## 2.26.2 Posting by Non-DOP Cheque
Agent While preparing the schedule will select payment mode as **Non-DOP Cheque**. Cheque details and bank name has to be provided also. After clearing of the cheque office account \`SOLID0017\` has to be checked to see whether amount credited properly before proceed to posting. At the time posting by \`HAGTXP\` every details will be shown. **Post**.
`
  },
  {
    id: '2.30',
    sectionNumber: '2.30',
    title: 'PRSS Bulk List Posting',
    categoryId: 'bulk_agent',
    content: `
# 2.30 PRSS Bulk List Posting

Bulk List Creation option available in Agent Portal can be used by PRSS agents to generate bulk list.

Menu for posting Bulk PRSS is \`CPAGTXP\`.
`
  },
  
  // MISCELLANEOUS / VIEW
  {
    id: '2.29',
    sectionNumber: '2.29',
    title: 'View Pending Installment in RD',
    categoryId: 'general',
    content: `
# 2.29 View Pending Installment in RD

To view pending installment of RD account \`HPLIST\` menu is used.

1. **Menu:** \`HPLIST\` - Click **Go**
2. **From A/c ID & To A/c ID:** In both field enter same RD Account No.
3. Enter **Start Date** & **End date**
4. Click **Go**. List will show

**Legend for codes written against the entry:**
These are "N", "D", "A", "P"
* **N** => Normal
* **D** => Default
* **A** => Advance
* **P** => Pending
`
  },
  
  // SECTION - 16 AGENT PORTAL
  {
    id: '2.31',
    sectionNumber: '2.31',
    title: 'Addition of an Agent',
    categoryId: 'bulk_agent',
    content: `
# 2.31 Addition of an Agent

1. **Menu:** \`HDSAMM\` – Click **Go**
2. **Function:** A-Add
3. **DSA ID:** Enter ID of DSA. (Enter an alphanumeric ID. E.g. JOYTI72) Click **Go**

**Under General Page TAB:**
4. Enter **DSA Name**
5. Enter **Postal code** and click outside to populate data.
6. Enter Address 1,2,3 etc.
7. Enter Phone no, Mobile no etc.
8. Enter **License No.**
9. **DSA Turnover Frequency:** i) Daily ii) Holiday – N-Next day (or as desired by the DSA)
10. **Commission Cr. A/c. ID:** Enter SB A/c No. of the DSA. 
    *(Commission Credit account must be SB single account/Joint a/c is not allowed).*
11. Enter **Next turnover date**
12. Enter **Tax Code:** TDSAG
13. Enter **License Expiry date**
14. **SET ID:** Enter SOL ID
15. **Agent type under Fee Code Section:** Select from searcher SAS/MPKBY/PPF/PRSS

**Under Product Page TAB:**
1. Select **Scheme Code:** e.g. RDIPN/MISN1 etc.
2. Select **Pay commission:** YES radio button
3. Enter **Payment frequency:** i) Daily ii) Holiday – N-Next day
4. Enter **Next Commission date:** Any date after migration
5. **Subvention Reversal Credit Placeholder:** Enter the no. e.g. 45089000
6. **Submit.**
`
  },
  {
    id: '2.32',
    sectionNumber: '2.32',
    title: 'Addition of an Agent Verification',
    categoryId: 'bulk_agent',
    content: `
# 2.32 Addition of an Agent Verification

1. **Menu:** \`HDSAMM\` – Click **Go**
2. **Function:** V-Verify
3. **DSA ID:** Enter ID of DSA. Click **Go**
4. **Under General Page/ TAB:** check all the entries.
5. **Under Product page/ TAB:** check all the entries.
6. **Submit**
`
  },
  {
    id: '2.33',
    sectionNumber: '2.33',
    title: 'Procedure to copy an Agent',
    categoryId: 'bulk_agent',
    content: `
# 2.33 Procedure to copy an Agent

1. **Menu:** \`HDSAMM\` – Click **Go**
2. **DSA ID:** Select one DSA ID from searcher
3. **Function:** Select C-Copy And Click **Go**
4. Enter **DSA Name** (Enter the new agent name which you would like to create in the Finacle as shown but **agent name should not contain spaces or special characters**.) Click on **Go**.
5. **Under General Page/TAB:** delete the entries and re-enter all the required fields for the new agent (as shown in ADD procedure)
6. Click on **Product Page/TAB**. System will show all the **24 products** (added automatically) as we have selected "COPY" function while creating the agent hence this work will be reduced. If you had selected the function "ADD" then you had to add all the 24 products.
`
  },
  
  // QUESTIONS & ANSWERS
  {
    id: 'faq',
    sectionNumber: 'Q&A',
    title: 'Frequently Asked Questions',
    categoryId: 'qa',
    content: `
# Frequently Asked Questions (Q&A)

**Q: What is the minimum deposit amount for a Post Office RD?**
A: The minimum deposit installment amount for opening a RD account is Rs. 10/- per month and in multiples of Rs. 5/-. There is no maximum limit.

**Q: What is the maturity period of a Post Office RD?**
A: The RD account is opened for a fixed period of 60 months (5 years). It can be further extended for another 60 months.

**Q: What is the current interest rate for Post Office RD?**
A: The interest rate for the 5-Year Post Office Recurring Deposit is **6.7% per annum** (quarterly compounded), as per the government notifications for the current financial year.

**Q: When can I prematurely close my RD account?**
A: A pre-mature closure of an RD account is allowed only after 3 years from the date of opening.

**Q: What happens if I miss my monthly installments?**
A: If the installment is not paid within the due date, it becomes a default. In case of more than four defaults, the account is treated as discontinued. It can be revived within two months from the fifth default by paying the defaulted installments along with a default fee (5 paisa for every 5 rupees of a defaulted installment per month).

**Q: Can I get a loan against my RD account?**
A: Yes, only one loan (or half withdrawal) not exceeding 50% of the outstanding balance can be sanctioned after one year of account opening, provided at least 12 deposit installments are made.

**Q: Is it possible to clear the loan amount fully without interest?**
A: No, the loan principal must be paid with interest before closing the RD account. If it's a premature closure, the system will automatically deduct the loan amount, and the RD balance will earn the standard Savings Account (SB) interest rate instead of the RD rate.

**Q: How are agent commissions handled in Finacle?**
A: Agent commissions for bulk postings are automatically credited to the Agent's SB account after deducting TDS upon posting of the reference generated in the Agent Portal.
`
  },
  // SCSS SECTIONS
  {
    id: 'scss_6.1',
    sectionNumber: '6.1',
    title: 'Account Opening (CSCAOP)',
    categoryId: 'scss_general',
    content: `
# 6.1 Account Opening

1. Invoke **CSCAOP** menu
2. **Function** - Open
3. Enter **CIF ID**
4. Enter **Scheme Code** (Click on the search icon for the Scheme Code and select the appropriate one: SRSCM for general conditions, SRDEF for defense personnel, or SRVRS for voluntary retirement)
5. Click on **GO**(F4)
6. Enter **Deposit Amount**
7. Enter **Interest Credit A/C** if any
8. Enter **Mode Of Operation**
9. Enter **Transaction Details** - Cash/Transfer
10. For Transfer, Enter **Debit A/C ID**.
11. Enter **Related Party 2 Details** (Joint Accounts)
12. Enter **Nomination Details** if any
13. Click on **SUBMIT**(F10)
14. Note Down the A/C ID and Verify the same in supervisor login using **CSCAOPV** menu.

**Note 1:** If we forget to enter the transaction details at the time of opening, we must do the funding after verification of the opening.
1. For Funding by **Cash**, Invoke **CTM** menu
2. For Funding by **Cheque/Account transfer**, Invoke **CXFER** menu Funding transaction must be verified in the same menu in supervisor login.

**Note 2:**
1. For Opening through **POSB cheque**, use Customer's SB account ID as Debit A/C ID.
2. For Opening through **Bank cheque**, use SOLID+0382 as Debit A/C ID. Change the value date as cheque clearance date.

**Note 3:** We can choose Documents Received as **NO** as we are not sending any documents for scanning at CPC.
`
  },
  {
    id: 'scss_6.2_6.3',
    sectionNumber: '6.2 & 6.3',
    title: 'Closure & Interest Withdrawal',
    categoryId: 'scss_closure_interest',
    content: `
# 6.2 Account Closure
1. Make sure that the overdue interest is paid upto date
2. Invoke **HCAACTD** menu
3. **Function** - Close
4. Enter SCSS **A/C ID**
5. View signature(F9)
6. Click on **GO**(F4)
7. View Account information Tab
8. View Closure Details
9. Select Close mode as Cash/Repayment account(For SB A/C Transfer)
10. For SB A/C Transfer, Enter Repayment **A/C ID** which is nothing but customer sb ac no.
11. View Closure Exceptions
12. Select Appropriate Closure Reason Code
13. Click on **SUBMIT**(F10)
14. Verify the transaction in supervisor login using **HCAACVTD** menu

**Note 1:** For Cash closures, Invoke **HCASHPND** menu
1. **Function** - Process
2. Click on **GO**(F4)
3. Select the Appropriate serial number and click on **POST** and verify using the same menu in supervisor login. It will effect the teller cash.

**Note 2:** For Premature Closure, System will not calculate the interest for the completed days but it will calculate the interest for completed months only.
**Solution:**
1. Invoke **HCAACTD** menu.(Nothing but closure menu only)
2. Change the Closure Value Date as Previous day date on which the customer wish to close the account.
3. Click on **GO**(F4)

# 6.3 Interest Withdrawal 

**Case 1: Interest payment by cash.**
1. Invoke **HTM** menu
2. **Function** - Add
3. **Transaction type/subtype** - Cash/Normal payment
4. Click on **GO** (F4)
5. Enter SCSS sundry a/c id which is SOL ID followed by 0338
6. Enter the amount
7. Enter the SCSS a/c no. as ref. no.
8. Click on **GO** (F4)
9. Again Enter the ref. no. which is nothing but SCSS A/C no.
10. Click on **GO** (F4)
11. Select the amount specified
12. Click on **Accept**
13. Click on **post**
14. Note down the reference id and verify the same in the same menu in supervisor login

**Case 2: Interest payment by transfer to SB or giving Postmaster cheque.**
1. Invoke **HTM** menu
2. **Function** - Add
3. **Transaction type/subtype** – Customer Induced
4. Click on **GO** (F4)
5. Enter SCSS sundry a/c id which is SOL ID followed by 0338
6. Enter the amount
7. Enter the SCSS a/c no. as ref. no.
8. Click on **GO** (F4)
9. Again Enter the ref. no. which is nothing but SCSS A/C no.
10. Click on **GO** (F4)
11. Select the amount specified
12. Click on **Accept**
13. Click on **ADD** and enter the account to which the interest amount is to be transferred (for giving RBI cheque enter ac no as SOLID+0340) .Click the contra-adjustment button (3=3) and then click on **POST**.
**Note:** In the second screen, If there is an error showing "no records fetched", delete start amount and end amount and click on GO.
`
  },
  {
    id: 'scss_misc',
    sectionNumber: '6.4 - 6.9',
    title: 'Modifications, Auto Credit, TDS & Extension',
    categoryId: 'scss_mod',
    content: `
# 6.4 Auto Credit Interest to SB Account
1. Invoke the menu **CSCAM** 
2. **Function** - Modify
3. Enter the A/C number
4. View the signature if necessary (F9)
5. Click on **GO** (F4)
6. In Interest Credit Ac field enter SB account no.
7. Click on **SUBMIT** (F10)
8. Verify the account using the same menu.

# 6.5 Single to Joint Conversion and Vice Versa
**Case 1 – Single to Joint**
1. Invoke the menu **CSCAM**
2. **Function** - Modify
3. Enter the A/C number and press tab button on keyboard.
4. View the signature if necessary (F9)
5. Click on **GO** (F4)
6. Change mode of operation as ‘017’.
7. Add Related Party 2 details:
   * Choose relation type as SPOUSE
   * Enter the cif id of the joint depositor and all fields will be automatically filled up.
8. Click on **SUBMIT** (F10)
9. Verify the A/C number in the same menu in supervisor login to complete the modification process.

**Case 2 – Joint to Single**
1. Invoke the menu **CSCAM**
2. **Function** - Modify
3. Enter the A/C number and press tab button on keyboard.
4. View the signature if necessary (F9)
5. Click on **GO** (F4)
6. Change mode of operation as ‘012’.
7. Remove Related Party 2 details:
   * Delete the cif id of the joint depositor and all fields will be automatically deleted.
8. Click on **SUBMIT** (F10)
9. Verify the A/C number in the same menu in supervisor login to complete the modification process.

# 6.6 Change of Nomination
**Case 1 – Giving nomination for first time**
1. Invoke the menu **CSCAM** -> **Function** - Modify
2. Enter the A/C number and press tab button on keyboard.
3. View the signature if necessary (F9) -> Click on **GO** (F4)
4. Choose Nomination as Yes, note down the nomination number.
5. Enter nominee details, nominee relation code (choose only numerical codes) and nomination percentage.
6. Click on **SUBMIT** (F10)
7. Verify the A/C number in the same menu in supervisor login to complete the modification process.

**Case 2 – Deleting existing nomination**
Follow steps 1-3 above. Near nominee details you will see a check box with label ‘Del’. Tick it. Submit and Verify.

**Case 3 – Changing Nomination**
Delete the nomination first, then add a new nomination.

# 6.7 15H/15G Feeding
For SCSS Account, 15H/15G Must be Entered in Two levels.
**ACCOUNT LEVEL:**
1. Invoke **CSCAM** menu -> **Function** - Modify
2. Enter SCSS A/C ID -> Click on **GO**(F4)
3. Enter Tax Form - 15H/15G -> Select tax Category as NOTAX
4. Click on **SUBMIT**(F10)
5. Verify the Transaction in the same menu in supervisor login.

**CIF LEVEL:**
1. Invoke **CMRC** menu -> **Function** - Modify
2. Enter CIF ID of the SCSS A/C -> Click on **GO**(F4)
3. Enter Tax Deducted At Source Table Code as NOTAX
4. Click on **SUBMIT**(F10)
5. Verify the CIF in the same menu in supervisor login.

# 6.8 Refund of TDS
1. Invoke **HRFTDS** menu
2. Enter Report To - **PM**
3. Enter Refund CIF ID - SCSS A/C CIF ID
4. Enter From A/C ID -> To A/C ID will appear automatically
5. Select Tran. Type - **Transfer**
6. Click on **GO**(F4)
7. Select the concerned month. Click on Add each time for multiple months selection.
8. Enter Refund A/C ID for each selection (SOLID+0340 for cheque OR Customer's SB A/C ID for SB Transfer)
9. Click on **SUBMIT**(F10)
**Note1:** Follow the above procedure only if the TDS is not accounted for. (Not uploaded to IT department). If already uploaded, then issue 16A form but don't refund the amount.
**Note2:** Don't select Tran. Type as Cash. It must be cheque or SB A/C Transfer only.

# 6.9 Account Extension
1. Invoke **HTDREN** menu
2. **Function** - Renewal
3. Enter SCSS A/C ID -> Click on **GO**(F4)
4. Select Calculate Overdue Int as **NO**
5. Select Print Renewal Confirmation as **IMMEDIATE**
6. Click on **SUBMIT**(F10)
7. System will display a message. Click on OK
8. Verify the Transaction in the same menu in supervisor login.
*After extension due interest will be generated in the next quarter only.*
`
  },
  // SB SECTIONS
  {
    id: 'sb_3.1_8.6',
    sectionNumber: '3.1 - 8.6',
    title: 'Opening & Modification',
    categoryId: 'sb_general',
    content: `
# 3.1 About Post Office Savings Bank Account (SB Account)
* Interest payable Rate is 4% per Annum.
* Minimum Amount for opening A/c is Rs. 20/- and No maximum balance limit is there.
* Account can be opened by cash only.
* Minimum balance to be maintained in a non-cheque facility account is INR 50/-.
* For Cheque/ATM facility account is to be opened with INR 500/- and for this purpose minimum balance of INR 500/- in an account is to be maintained. 
* Cheque facility can be taken in an existing account also. In that case also Minimum balance to be maintained INR 500/-.
* Interest earned is Tax Free up to INR 10,000/- per year from financial year 2012-13.
* Nomination facility is available at the time of opening and also after opening of account.
* Account can be transferred from one post office to another.
* One Single account & One Joint Account can be opened by a customer in one post office. 
* Account can be opened in the name of minor and a minor of 10 years and above age can open and operate the account individually.
* Joint account can be opened by two or three adults. 
* At least one transaction of deposit or withdrawal in three financial years is necessary to keep the account active.
* Single account can be converted into Joint and Vice Versa.
* Minor after attaining majority has to apply for conversion of the account in his name.
* Deposits and withdrawals can be done through any electronic mode in CBS Post offices.
* Inter Post office transactions can be done between CBS post offices. This type of transaction is called Intersol transaction in CBS.
* ATM/Debit Cards can be issued to Savings Account holders (having prescribed minimum balance on the day of issue of card) of CBS Post offices.

# 3.2 Opening of SB Account
*All the mandatory fields must be entered. Mandatory fields are marked as red asterisk (*)*
1. **Menu:** \`CASBAO\` – Click **Go**
2. **Function:** O-Open (Default)
3. Enter the **CIF ID**
4. Select the **Scheme code** from searcher which is applicable— \`SBCHQ\` / \`SBGEN\` etc. - Click **Go**. A message will come "Please check the Risk Category of the customer for KYC purpose", Click OK. All the data of the customer as per the CIF ID will get populated.
5. Select **The mode of operation** – Enter \`012\`(Single) / \`016\`(Joint A) / \`017\`(Joint B) etc. as applicable. Searcher can be used to select also.
6. **Number of documents received** – Enter \`1\` (as only AOF has been submitted by customer)
*- If the account is opened at BO, Change the Account open date (BO A/c open date) if required and select Branch office name/code from searcher.*
7. **Document code:** Enter \`016\`
8. Enter **Document Date** (Press Ctrl+X for current date). Enter Document details 1 only as you have entered 1 in the document received box.
9. **Scan details:** Select **Scan Not Required**
10. **Document Status:** Select **Document submitted**
11. In Finacle, Joint holders are named as Party Details. Enter Party details 2, 3 etc. If the mode of operation is 016/017 (joint account).
    i) Enter **CIF ID** and **click outside**. Details of joint holder will come automatically
    ii) **Relationship type:** Select Joint Holder
    iii) **Relationship code:** Select from searcher 001(Father)/004(Mother)/005(Son)/006(Daughter)/017(Wife)/018(Husband) etc.
12. **Nomination:** Select **Yes** if there is nominee, Nomination Number will be generated. Note down the Nomination number on the AOF immediately in red ink.
13. Give **Nominee details** – If Nominee has a CIF, enter the CIF. Otherwise First enter Name, then Postal code and click outside. City and State fields will be auto populated. Select from Searcher Relationship, Country (IN/INDIA). Enter Address, Nominee Pct (100 in case of single nominee. In case of more than one nominee, percentage of nominee to be distributed as per requirement of the customer). Up to 6 nominees can be given. In case nominee is minor provide DOB of nominee and also provide the Guardian details.
14. **Submit:** A/c ID will be generated, note it on AOF in Red Ink. Zero("0") Balance account will be opened.
*Note: Any Account Number(SB/TD/RD/MIS/SCSS/NSC etc.) generated in finacle is 10 digit number.*

# 3.3 Verification of SB Account (By Supervisor)
1. **Menu:** \`CASBAV\` – Click **Go**
2. **Function:** V-Verify
3. Enter the **A/C ID**
4. **Submit** if everything is made correct. Cancel it if anything wrong. But super don't have to reject.

# 3.4 Modification before verification [by same operator]
1. **Menu:** \`CASBAOM\` – Click **Go**
2. **Function:** M-Modify
3. Enter **Account ID** – Click **Go**
4. Modify the required field. [some fields may not be modified]
5. Click **Submit**

# 3.5 Modification of existing SB Account
1. **Menu:** \`CASBAM\` – Click **Go**
2. **Function:** M-Modify
3. Enter **Account ID** – Click **Go**
**Major Modifications:**
* Mode of operation - Single to joint account and vice versa
* Nomination - Addition, Modification
* Account status - Silent to active
* 15G/15H submitted - Status to "Yes" etc.
5. Click **Submit**
*Verification by a Supervisor menu \`CASBAM\`. Function - Verify*

# 3.6 To make Silent A/c Active
1. **Menu** \`CASBAM\` - Click **Go**.
2. **Function** – Modify.
3. **Account status:** Click "Live" Option.
4. Click **Submit**.
5. **Verify** the account using same menu \`CASBAM\`.
`
  },
  {
    id: 'sb_transactions_8.11',
    sectionNumber: '3.11, 8.13, 8.14, 8.16, 8.17',
    title: 'Cash/Cheque Transactions & Rectification',
    categoryId: 'sb_transactions',
    content: `
# 3.11 SB Transactions

**8.11.1 SB Cash Deposit By Counter PA**
1. **Menu:** \`CTM\` – Click **Go**
2. **Function:** A-Add
3. **Function type:** Select **deposit**
4. Click **Go**. A new window will come.
5. **A/c ID:** Enter SB A/c No. and click outside. SOL and A/c holders name will show.
6. **Amt:** Enter the amount written in SB-103.
7. Click **Post** button [any deposits irrespective of amount will be in Posted stage]
8. **Tran ID** will be generated. Note the Transaction ID on SB-103 in Red ink immediately.
*Note: In case of deposit amount is Rs. 50000/- and more and PAN no is not given previously in CIF, it will ask for PAN No. Ask the customer to submit photocopy of PAN. Change the CIF using CMRC menu for adding the PAN Number in CIF and verify it by super. If it is not done, responsibility goes to Counter PA. The counter PA may enter the PAN no in Remarks column to complete the transaction also, but inclusion of PAN in CIF must be done immediately.*

**8.11.2 Verification of Cash Deposit by Super**
1. **Menu:** \`CTM\` – Click **Go**
2. **Function:** V-Verify
3. Enter **transaction ID**
4. Click **Go**. Next screen will come.
5. Click **Submit** after checking.

**8.11.3 SB Cash Withdrawal by Counter PA**
1. **Menu:** \`CTM\` – Click **Go**.
2. **Function:** A-Add
3. **Function type:** Select **Withdraw**
4. Click **Go**. A new window comes.
5. **A/c ID:** Enter SB A/c No. and click outside. Name of the A/c holder & SOL will show.
6. Click **Signature view button/F9 Function Key** to view signature. Click **Red & white button** to view details of the account if required. A/c holder’s name and Balance will be shown. Always check **effective available Balance only** before make any payment.
7. **Amt:** Enter Amount to be withdrawn.
8. Click **Post** button.
9. **Transaction ID** will be generated. Note down on SB-7 voucher.

**8.11.4 SB Cheque Withdrawal by Counter PA**
1. **Menu:** \`CTM\` – Click **Go**
2. **Function:** A-Add
3. **Function type:** Select **Withdraw**
4. Click **Go**. A new window will come.
5. **A/c ID:** Enter SB A/c No and click outside. Name of the originating SOL of the A/c and account holder's name will show.
6. Check **Balance & Signature**.
7. **Amt:** Enter Amount
8. **Mode of Transaction:** Cheque
9. **Cheque Date:** Select from date Picker or enter the cheque date.
10. Enter **Cheque Number**. It will not come automatically. Alpha Number of Cheque is not required.
11. Click **Post** button. Transaction ID will be generated. Note down.

**8.11.5 Verification of Cash/Cheque Withdrawal by Super**
1. **Menu:** \`CTM\` – Click **Go**
2. **Function:** V-Verify
3. Enter **transaction ID**
4. Click **Go**. Next screen will come.
5. Click **Submit** after checking.
* **Note 1:** All withdrawal up to Rs. 5000/- will be in verified stage automatically and withdrawal over Rs 5000/- (5001/- and above) will be in Entered stage and has to be verified before making payment to customer. Transaction stage can be Checked by CTM/HTM menu and Function – Inquire. You will require Transaction ID. Transactions which are in Entered stage can be deleted using menu HTM.
* **Note 2:** If Withdrawal Slip is selected in case of a cheque account then an Exception will be shown during transaction by CPA & Super verification. Take permission from Postmaster before proceed.
* **Note 3:** Transaction ID if not found due to any reason may be obtained using HFTI Menu, in case of transactions which are in Entered/Verified/Posted stage. Transactions which are in Verified/Posted stage may be obtained using HACLI Menu.
* **Note 4:** Always Check Effective Available Balance before withdrawal. If withdrawal amount is more than available balance - In case of withdrawal amount is 5000/- and below, error is thrown during transaction by CPA. If amount is 5001/- and above, CPA will not get any exception or error but the Supervisor will get an error. In that case the transaction will be in entered stage and may be deleted using HTM menu.

# 3.13 Transfer Transactions (customer induced)
A customer wants to transfer some amount from his account to another account. For this purpose one withdrawal and one deposit slip must be filled up. Check Dr. Balance before transaction.
1. **Menu:** \`CXFER\` – Click **Go**
2. **Function:** A-Add
3. **Function type:** Transfer(default) – Click **Go**. New window will open.
4. Enter **Dr. A/c ID:**
5. Enter **Cr. A/c ID:**
6. **Amt:** Enter Amount to be transferred.
7. Select **Transfer slip** (Default)
8. Click **Post** button
9. Note **Tran ID** on both vouchers.
*Super to verify the Transaction with the same menu \`CXFER\`. Function - Verify.*

# 3.14 Rectification of wrong Transaction
Amount X (e.g. Rs 50000) posted instead of Amount Y (e.g. Rs 5000) or posting done in wrong account number.
**Withdrawal of the wrong deposit made:**
1. **Menu:** \`CTM\` – Click **Go**
2. **Function:** A-Add
3. **Function type:** Select **Withdraw** – Click **Go**
4. **A/c ID:** Enter SB A/c No. where wrong amount posted and click outside.
5. Enter **Amount:** whole of the amount (e.g. 50000) in case of wrong amount posted
6. **Transaction particulars:** Enter "Reversal - Wrong cash Deposit" [This is very important]
7. Click **Post**. Note down the transaction ID on the SB-7 made by the office itself if customer not available. If customer is not available, make an entry in the error book.
**Deposit correct amount or in the correct account no:**
1. Normal Deposit procedure with correct amount or in the correct account number using CTM
2. Note down new transaction id on the SB-103 made by the office itself.

# 3.16 Branch office SB Deposit
1. **Menu:** \`CXFER\` – Click **Go**.
2. **Function:** A-Add (Function type: Transfer(default) come)
3. **Transaction type/subtype:** Select **T/BI-Bank Induced**. [Important factor]
4. Click **Go**. A new window opens.
5. Enter **Dr. A/c ID:** Branch settlement account number of the SOL (SOLID0339)
6. Enter **Cr. A/c ID:** Customer SB account No.
7. **Amt:** Enter the amount
8. **Transaction particulars:** Enter "BY CASH DEPOSIT- BO name" by removing the word "BY TRANSFER"
9. **Value date:** BO transaction date. [Be cautious about the transaction date, only current date is shown here, it has to be changed to BO transaction date, if required]
10. Click **Post** button
11. Note **Transaction ID** on voucher.
*After verification by super with same menu \`CXFER\`, transaction will appear in LOT and Consolidation.*

# 3.17 Branch office SB Withdrawal
*[Use HACLI to see the balance before withdrawal at AO]*
1. **Menu:** \`CXFER\` – Click **Go**.
2. **Function:** A-Add (Function type: Transfer(default) come)
3. **Transaction type/subtype:** Select **T/BI-Bank Induced**. [Important factor]
4. Click **Go**. A new window opens.
5. Enter **Dr. A/c ID:** Customer SB account No.
6. Enter **Cr. A/c ID:** Branch settlement account number (SOLID0339)
7. **Amt:** Enter Amount
8. **Transaction particulars:** Enter "BY CASH WITHDRAWAL-BO Name" by removing the word "BY TRANSFER".
9. **Value date:** BO transaction date. [Be cautious about the transaction date, only current date is shown here, change it to BO transaction date]
10. Click **Post** button.
11. Note **Transaction ID** on Voucher.
*After verification by super transaction will appear in LOT and Consolidation.*
`
  },
  {
    id: 'sb_cheque_8.8',
    sectionNumber: '3.8, 8.9, 8.10, 8.23-8.26',
    title: 'Cheque Book & Stop Payment',
    categoryId: 'sb_cheque',
    content: `
# 3.8 Issue of Cheque Book
1. **Menu:** \`HICHB\` – Click **Go**
2. **Function:** Issue
3. **Acknowledgement** radio button – Select "Yes" option.
4. **A/C Id:** Enter SB Account ID in which Cheque book to be issued.
5. **Cheque Type:** Select from searcher as \`CHQ\`
6. Click **Go**. New window is opened.
7. A list of cheque book will show. Select the check box at left to select the Cheque book to be issued. The Cheque book should be issued serially.
8. Click **Submit**. A message will come "Cheque book issued successfully to A/c ID"

**8.8 Issue of Cheque Book Verification:**
1. **Menu:** \`HICHB\` and Click **Go** button
2. **Function:** Select **Verify**
3. **A/c ID:** Enter the SB Account no.
4. Click **Go**. New window opens.
5. In the next screen click **Submit**. A message will come "verified successfully"

# 3.9 Cheque Book Inquiry
1. **Menu:** \`HCHBI\` – Click **Go**
2. **A/c ID:** Enter SB A/c no
3. Click **Go**
4. Click **View details**.

# 3.10 To find an Account number by a Cheque Number
1. **Menu** \`HINQACHQ\` – Click **Go**
2. Enter **Cheque No.**
3. Click **Go**
In the next screen A/c ID will show along with A/c Holders name.

# 3.23 Stop payment
Stop payment of a cheque referred to when the cheque is lost or damaged. This is a precautionary step to stop cheque being realized by the person not entitled to it.
*Stopping the payment of the cheque is requested by the customer.*
1. **Menu:** \`HSPP\` – Click **Go**.
2. **Function** – Stop Pay
3. **A/c ID:** Enter SB A/C no
4. **Begin Chq No.:** In case only one cheque leaf, enter the Cheque no. which has to be stopped. In case more than one cheque leaf, enter the Begin Cheque No. from which cheques have to be stopped.
5. **No. of leaves:** Enter no. of cheque leaf/leaves. In case of one cheque has to be stopped enter 1 here. In case of more than one cheque has to be stopped enter the number of cheques to be stopped.
6. Click **Go**.
If number of cheque leaf is only one In the next Screen:
7. Enter Payee name
8. Enter Chq. Date
9. Enter Chq. Amt.
*(In case of more than one cheque do not enter these information)*
10. Select **Reason code** from searcher only (e.g. 001-chq reported Lost)
11. **Submit**. Note Ref No.

**Verification process by Supervisor:**
1. **Menu:** \`HSPPAU\` – Click **Go**
2. **Function** – Verify
3. Enter The **Ref No** and click outside. All the information will show.
4. Click **Go**
5. Details will be shown, Click Cheque details to check.
6. Click **Submit**
*Note 1: You can see the stop payment information by invoking the menu HCHBI, Enter A/c ID and click Go. Now view details (refined search available). Select Back button to return.*
*Note 2: Stop pay report can be seen from HPR menu.*

# 3.24 Revoking Stop payment
1. **Menu:** \`HSPP\` – Click **Go**.
2. **Function** – Revoke Stop Pay
3. **A/c ID:** Enter SB A/C no
4. Enter **Begin Chq No.**
5. **No. of leaves:** Enter no. of cheque leaf/leaves
6. Click **Go**. New window opens
7. Click **Submit**
8. Note Down the **Ref No**.
*Verify the Revoking of Stop payment using menu HSPPAU.*

# 3.25 Cheque Book Destroy Procedure
Before closing SB cheque account cheque book or remaining cheque leaves must be destroyed first.
1. **Menu:** \`HCHBM\`- Click **Go**
2. **Function:** D-Destroy
3. **A/c ID:** Enter Account ID where cheque book was issued.
4. **Begin Cheque Number:** Enter begin cheque number from where it will be destroyed.
5. **No of Leaves:** Enter the number of remaining cheque leaves.
6. Click **Go**. A new window will come with details.
7. **Submit**
8. **Verification** with the same menu HCHBM. Function- Verify

# 3.26 Other functions of the Menu HCHBM
* To inquire about cheque book.
* If the cheque is not recognized in Finacle. The main cause may be it has not been Acknowledged. Use **Acknowledge function** and verify it with supervisor.
`
  },
  {
    id: 'sb_passbook_inquiry',
    sectionNumber: '3.12, 8.15, 8.20 - 8.22',
    title: 'Passbook & Inquiries',
    categoryId: 'sb_passbook_inquiry',
    content: `
# 3.12 Transaction Ledger Inquiry
1. **Menu:** \`HACLI\`, Click **Go**
2. **A/c ID:** Enter Account ID
3. Change the **From date** if transaction from previous date required.
4. Click **Go**

# 3.15 Print Passbook

**8.15.1 New Passbook Print**
1. **Menu:** \`HPBP\` – Click **Go**
2. Enter the **A/C ID**. Click outside. A/c Holders name and originating SOL of the A/c will show.
3. Click **Print** button.
4. First page of the Passbook will flash. Then Print window will open. Again Click **Print** button inside the Print window, to print first page of the passbook.
5. A message Print OK will come – Click "Yes" if Print is done correctly. Click "No" if Print is not done correctly. Print can be done again if "No" option is selected.
After printing of first page, print transaction pages. Repeat the step 1 to 5 to print the transaction page/pages.

**8.15.2 New Continuation Passbook Issue**
1. **Menu:** \`HPBP\` – Click **Go**
2. Enter the **A/C ID**. Click outside.
3. Click **Modify** button.
4. **New Passbook:** Click "Yes" option
5. Click **Print** button
6. Print first page then print transaction pages if any. Procedure explained above.

**8.15.3 Duplicate Passbook Issue**
1. **Menu:** \`HPBP\` – Click **Go**
2. Enter the **A/C ID**. Click outside
3. Click **Modify** button.
4. **New Passbook:** Click "Yes" option
5. **Duplicate Passbook Printed:** Click "Yes" option
6. Click **Print** button
7. Print first page then print transaction pages if any. Procedure explained above.

**8.15.4 Passbook Reset**
At the time of Duplicate passbook issue, if the customer wants to print the transaction from a mentioned previous date, then Passbook reset has to be done before printing of Duplicate passbook. For any other reason when back dated pages print of passbook required this menu is required.
1. **Menu** \`HPBPR\`, Click **Go**.
2. **Function** : RESET
3. **A/c ID:** Enter the A/c ID
4. **From Date:** Enter the date from which Transactions are required to be print in the passbook.
5. Click **Accept**. A new window will open.
6. Click the **Check Box** against the transaction from which print required.
7. Click **Submit**. A message will come "A/c ID .............reset successfully".
**Verification by Super:**
1. **Menu** \`HPBPR\` -> **Function:** VERIFY
2. **A/c ID:** Enter A/c ID
3. Click **Accept**. A new window will come.
4. Click **Submit**. A message will come "A/c ID .............verified successfully".
After the reset, print the Passbook using the menu HPBP. Procedure same as described in Section 8.15.3 in case of duplicate passbook. If it is not the case of duplicate PB, then follow procedure of normal PB print described in section 8.15.1.

# 3.20 Account Balance Check
Balance of any account (Effective Available Balance), Float Balance (When cheques are entered) Shadow balance (Funds in clearing) of cheque, Lien Amount, Scheme code of A/c etc. can be checked using this procedure.
1. **Menu:** \`HACCBAL\`- Click **Go**.
2. Enter **A/c ID**
3. Click **Go**

# 3.21 Account Details Check
CIF ID of the account, Customers name, Scheme code, A/c Status, A/c Open date, Interest rate, Mode of operation, Freeze code etc. can be seen.
1. **Menu:** \`HACCDET\`- Click **Go**.
2. Enter **A/c ID**
3. Click **Go**

# 3.22 Pre Migration Transaction Check (Transactions of Sanchaya Post)
1. **Menu:** \`TIPM\`- Click **Go**.
2. Enter **Account Number**
3. **Start Date:** Enter the date from which transaction details required
4. Click **Go**
`
  },
  {
    id: 'sb_closure',
    sectionNumber: '3.7, 8.18, 8.19',
    title: 'Closure & Scheme Change',
    categoryId: 'sb_closure_transfer',
    content: `
# 3.7 To change Scheme of SB A/c – [To be done by HO only - SB order 5/2016]
* Scheme of SB account can only be changed.
* Transfer of SB accounts is possible only between schemes of the same product group. When Target scheme code belongs to a different product group compared to the Source scheme code, then error "Scheme Mismatch-Account can’t be transferred" is faced.
The valid transfer scenarios are-
* Product Group SBSGP : SBGEN -> SBCHQ
* Product Group SPNGP : SBPEN -> SBPWC
* Product Group SANPG : SBSAN -> SBSWC
**Procedure:**
1. **Menu:** \`HACXFRSC\` – Click **Go**.
2. **Function:** Select **T-Transfer** and Click **Go**
3. Enter **SB A/c No** [of Source scheme] and click outside. Details of current scheme will come.
4. Click the searcher of **Target Scheme code** and click **Submit** button in the following screen.
5. Select **Target Scheme** [e.g. SBCHQ]
6. Click **Submit** -> Instruction no will be generated.
7. Super to **Verify the Instruction no**
8. After verification use Menu \`HPR\` to print the report

# 3.18 SB Account closer (HO or SO Account)
* No Trial Closer is possible in SB Account.
* Before closing SB account the following should be checked-
1. **There is no Float Balance, Unclear balance etc.** – Check using the Menu \`HACCBAL\`/\`HACLI\`. If exists, first clear the cheque and these balances are zero, then the SB a/c can be closed.
2. **No Lien is marked.** - Check using the Menu \`HACCBAL\`. If Lien is there check the reason. For revoking the Lien use the menu \`HALM\`.
3. **No transaction verification is pending for the account.** Menu \`HFTI\` – Enter A/c ID of SB for pending transaction verification inquiry. If found use the Menu \`HTM\`/\`CTM\` to verify.
4. **No modification is pending for the SB account or the CIF of the SB account.** Menu \`HAFI\`- Enter A/c ID of SB for pending verification inquiry. If any pending use the menu \`CASBAM\` to verify it. Use Menu \`CMRC\` for CIF Verification pending issue.
5. **Account is not freezed.** If freeze Check why the a/c is freezed - if by any court order etc. Account can not be unfreezed and closed. Unfreez it using the Menu \`HAFSM\`.
6. **Account is not silent (dormant).** Check using Menu \`HACLI\`, Status "Active". Use Menu \`CASBAM\`, make it active, verify it.
7. **No standing instruction is linked.** If linked, at the time of closer it will show the SI Serial no. Note the numbers. Delink it using the menu \`HSSIM\`. Use function Delete to delete the SI.
8. **No Interest credit linked to this account.** If linked, at the time of closer it will show the linked account numbers. Note it. Use the Modification menu of the scheme (MIS/TD/SCSS) and delete the SB A/c ID from Interest Credit Account ID field and Repayment A/c ID field. If the MIS/TD/SCSS account was linked and Interest posting occurs on the same day the SB A/c is tried to close, it will not allow to close the SB A/c. Even If the MIS/TD/SCSS account is closed also (which was linked to SB), on the same day the SB account can not be closed. Ask the customer to close the SB A/c on the next day.
9. **No cheque Book exists.** Check using \`HACCDET\` whether cheque account. If exists use the Menu \`HCHBM\`. Use Function - Destroy to destroy the Cheque book first.
10. **Interest calculation.** See interest executing the \`HACACCR\` and \`HPR\` or using the Menu \`HAITINQ\`. Check the interest using \`HACLI\`. On closing system will automatically calculate Current Year Interest.

**Account Closure Execution:**
1. **Menu:** \`HCAAC\`-Click **Go**
2. **Function** –Z-Close
3. Enter **SB A/c ID** to be closed
4. Check **Transfer box** if balance is there. Uncheck if balance is not there(already withdrawn)
5. **Transaction type:** If balance transfer box is selected, select **cash** if customer wants cash. Select **transfer** if customer has another SB a/c and wants to transfer the amount there. Select transfer also in case customer wants cheque.
Transfer A/c ID: If transfer is selected,
 i) Enter an SB A/c where customer wants to transfer the cash.
 ii) Enter Postmasters Cheque Account ID (\`SOL0340\`) if customer wants cheque.
6. Click **Go**. New window opens.
7. Click **Closer Tab**
8. Select **Reason Code** from searcher.
9. Click **Submit**.
*A system generated Tran ID starting with "S" may shown. Note the Tran ID. Post the Tran ID by counter PA using HTM Menu (function-Modify). Verify the Tran ID by super-using Menu HTM.*
Unused cheque leaves, Standing Instructions, Interest Credit A/c no. link will be checked by the system before closing. If system found such thing act on this, then go for account closer.
Verify the Account closer of SB using Same Menu \`HCAAC\`. Function - Verify

**While verifying the closure of SB account, if user faces the error "The account closure can proceed only if the balance is zero.":**
1. When account closure is initiated in \`HCACC\`, system automatically creates transaction to debit entire balance on the given SB account/Teller(in case of cash closer) and this transaction ID (starting with "S") is shown in the result message.
2. The Counter PA has to use \`HTM\` menu to **post (Function – Modify) the transaction** and **Super has to verify** this transaction using \`HTM\` menu again, so that the balance of the account becomes Zero. If the transaction ID is not noted, the same can be found out by listing all transactions of the account using \`HFTI\` and checking the status of the transactions.
3. Once the transactions are posted and verified and account balance has become zero, the Super can proceed with verification of SB closure.

# 3.19 Branch Office (BO) SB Account closer
When SB7A along with Passbook is received from BO, do the following-
**Step-1**
1. **Menu:** \`HACACCR\`
2. **Report to:** PM
3. **CCY field:** Enter "INR"
4. **From A/c ID:** Enter the BO SB account number.
5. **To A/c ID:** Enter the same BO SB account number.
6. **Submit** -> A message "Batch program successfully lodged" is displayed.

**Step-2**
1. Menu \`HPR\`- Click **Go**
2. Click **Go** in the next screen.
3. Click the **check box** against "Accrual Success Report".
4. Click on the **Print screen** button.
5. The total amount accrued as interest till date is displayed at the end of the report.

**Step-3**
Interest amount shown in the report, should be added to the balance in the account and noted On WARRANT OF PAYMENT of SB7A. This should be sent to Branch Office for closure of SB account with direction that, this is valid up to last working day of the month. Other procedure for sending sanction to BO should be followed.

**Step-4**
On receipt of SB7A from BO after closure, invoke the menu \`HCAAC\` for account closure.
1. **Menu:** \`HCAAC\`-Click **Go**
2. **Function** –Z-Close
3. Enter **SB A/c ID** of BO to be closed
4. Check **Transfer box**.
5. **Transaction type:** Select **Transfer**
6. **Transfer A/c ID:** Enter BO Settlement A/c (\`SOLID0339\`)
7. Click **Go**. The balance amount in the account will be displayed in the A/c Information tab
8. Click **Closer Tab**
9. Select **Reason Code** from searcher.
10. Click **Submit**. Total amount along with interest will be displayed. BO SB account will be closed and amount adjusted in BRANCH SETTLEMENT ACCOUNT.
Note Tran ID on SB7A
*Verify the Tran ID by super-Same Menu. After verification, transaction will appear in LOT and consolidation.*
`
  },
  // MIS SECTIONS
  {
    id: 'mis_general_10_2',
    sectionNumber: '5.2, 5.5, 5.4',
    title: 'MIS Account Details & Opening',
    categoryId: 'mis_general',
    content: `
# 5.2 About Monthly Income Scheme Account (MIS)
* All deposits in multiples of INR 1500/-
* Maximum investment limit is INR 4.5 lakhs in single account and INR 9 lakhs in joint account.
* Account can be opened by cash/cheque/transfer from SB Account.
* Joint account can be opened by two or three adults.
* Maturity period is 5 years from 1.12.2011.
* Monthly Interest may be drawn through auto credit into savings account standing at any CBS Post offices.
* Maturity amount may be transferred to SB account.
* MIS A/c can be prematurely en-cashed after 1 year but before 3 years at the discount of 2% of the deposit and after 3 years at the discount of 1% of the deposit.

# 5.4 General Issues regarding TD/MIS/SCSS Account
* TD And MIS Account Operation Uses Same Menu.
* SCSS Account opening, verification and modification use different menu.
* Interest payment procedure and closing procedure of TD/MIS/SCSS are same and uses same menu.
* Provision to open account by DOP cheque is not available right now. Use Account transfer mode instead.
* If Account to be opened by Account transfer, check fund is available in SB account using HACLI.
* If Account to be opened by Cheque, Office account SOLID0382 has to be checked using HACLINQ. Enter the cheque encashment date in the Value date field.
* The CIF of MIS/TD/SCSS A/c and CIF of Interest credit account (SB A/c) must be same.

# 5.5 Monthly Income Scheme (MIS) Account opening
1. **Menu:** \`CMISAOP\` – Click Go
2. Enter the **CIF ID**
3. Select Product Group **MIS**
4. Select the Scheme code (\`MISN1\`) from Searcher List. Click Go.
5. Select The Mode of operation – \`012\`(Single) / \`016\`(Joint A) / \`017\`(Joint B).
6. Enter Interest Credit Account: Enter SB A/c No. Leave Blank in case of interest payment by cash.
7. Enter Deposit Amount. Maturity date will be shown.
8. If any Agent attached, Click Agent option and select Agent ID.
9. Enter Party details 2,3 etc if joint account.
10. Transaction Required – Select Yes Radio button. Select Cash or Transfer.
11. If Non DOP Cheque, enter Debit A/c ID as \`SOL0382\`.
12. Select document code 016, Enter Document Date, Scan not required, Document Submitted.
13. Click Submit. MIS A/c ID & Txn ID will be generated.
`
  },
  {
    id: 'mis_closure_10_20',
    sectionNumber: '5.20, 5.21',
    title: 'MIS Account Closure',
    categoryId: 'mis_closure',
    content: `
# 5.20 About Closer of TD/MIS/SCSS Account
* Two types of closer – A) L-Trial Close & B) Z-Close.
* L-Trial Close is mandatory in cases of: Branch Office account close, Premature closer, Post Maturity Interest (PMI) generated, and when exact figure of closing amount to cheque drawing office is required.
* Ensure all due interest is paid before the closer.
* In case of MIS closer, Principal amount, Bonus amount (if any), PMI if any, PMI on Bonus (if any) will be shown on closer.
* In case of Joint MIS Account where one holder dies and investment is more than single holder limit, withdraw excess amount. Death of 1st holder: Death mark in CIF after withdrawal, then use CIF merger. Death of 2nd/3rd holder: half withdrawal done first, then modification menu of MIS used to delete holder.

# 5.21 Closer of TD/MIS/SCSS A/c on Maturity/Premature/Death
**Step 1:** Use menu \`HTDTRAN\` to see interest is generated for current month and credited to Sundry or SB account.
**Step 2:** Ensure interest has been paid. Check via \`HIOT\` (for pre-migration) or \`HTM\`. If not paid, pay it using \`HTM\` before closure.
**Step 3:** Use menu \`HCAACTD\` for Trial Close (L) to check amounts or Z-Close to finalize.
**Step 4:** Account closure execution:
1. **Menu:** \`HCAACTD\` -> Function: **Z-Close**
2. Enter A/c ID. Closer Value Date and Withdrawal Amt will populate.
3. Click Signature button (F9). Click Go.
4. If "Pay all unpaid interest from Sundry Account" appears, ensure it's paid.
5. In Closer Details Tab, select Close mode: Cash, Transfer (enter SB A/c), or Cheque (SOLID0340).
6. In Closer Exception Tab, select Reason Code (e.g. \`NORML\`, \`DTCLM\`). Click Submit.
7. Note system-generated Tran ID (starting with S) and Post via \`HTM\`.
8. Verify via \`HCAACTD\` (Verify).
`
  },
  {
    id: 'mis_td_scss_common',
    sectionNumber: '5.7, 5.8, 5.9, 5.10, 5.11, 5.15, 5.17',
    title: 'Common Procedures (MIS/TD/SCSS)',
    categoryId: 'mis_td_scss',
    content: `
# Setup and Verification
* **CMISAOPM**: Modification Before Verification for TD/MIS.
* **CMISAOPV**: Verification of new MIS or TD Account by Super.

# Modification of Existing TD/MIS Account
* Used for Nomination addition/modification, converting Single to Joint / Joint to Single, and setting auto credit to SB A/c.
* **Menu:** \`CMISAM\` -> Function: **M-Modify** -> Enter A/c ID -> Visit Flow Tab -> Submit.
* Verification by Super uses **Menu:** \`CMISAM\` -> Function: **V-Verify**.

# To update Standing Instructions from MIS/TD to SB A/c
1. **Menu:** \`CMISAM\` -> Function: M-Modify
2. Enter A/c ID. Enter Interest Credit Account (SB account number).
3. Visit Flow Tab and Submit. Must be verified immediately to reflect in next interest cycle.

# View TD/MIS/SCSS Interest
1. **Menu:** \`HTDTRAN\` -> Enter A/C ID -> Click Go.
2. Click on Date to see details of transaction and where interest has been posted.

# TD/MIS/SCSS interest payment
1. Interest flows to Sundry accounts: MIS (\`SOLID0337\`), TD (\`SOLID0335\`), SCSS (\`SOLID0338\`).
2. **Menu:** \`HTM\` -> Function: A-Add.
3. **Transaction type:** Cash/Normal Payment (for cash) or Customer Induced (for transfer to SB A/c or \`SOL0340\` for cheque).
4. Enter Sundry A/c ID in A/c ID field (e.g., SOLID0337 for MIS).
5. Enter Amount, and Original A/c No in Ref No.
6. Click Go button adjacent to Restore Value. Select the interest entries, click Accept. Click Post.
7. Verification by Super via \`HTM\` (V-Verify).
`
  },
  {
    id: 'mis_td_scss_common_td',
    sectionNumber: '5.7, 5.8, 5.9, 5.10, 5.11, 5.15, 5.17',
    title: 'Common Procedures (MIS/TD/SCSS)',
    categoryId: 'td_mis_scss',
    content: `
# Setup and Verification
* **CMISAOPM**: Modification Before Verification for TD/MIS.
* **CMISAOPV**: Verification of new MIS or TD Account by Super.

# Modification of Existing TD/MIS Account
* Used for Nomination addition/modification, converting Single to Joint / Joint to Single, and setting auto credit to SB A/c.
* **Menu:** \`CMISAM\` -> Function: **M-Modify** -> Enter A/c ID -> Visit Flow Tab -> Submit.
* Verification by Super uses **Menu:** \`CMISAM\` -> Function: **V-Verify**.

# To update Standing Instructions from MIS/TD to SB A/c
1. **Menu:** \`CMISAM\` -> Function: M-Modify
2. Enter A/c ID. Enter Interest Credit Account (SB account number).
3. Visit Flow Tab and Submit. Must be verified immediately to reflect in next interest cycle.

# View TD/MIS/SCSS Interest
1. **Menu:** \`HTDTRAN\` -> Enter A/C ID -> Click Go.
2. Click on Date to see details of transaction and where interest has been posted.

# TD/MIS/SCSS interest payment
1. Interest flows to Sundry accounts: MIS (\`SOLID0337\`), TD (\`SOLID0335\`), SCSS (\`SOLID0338\`).
2. **Menu:** \`HTM\` -> Function: A-Add.
3. **Transaction type:** Cash/Normal Payment (for cash) or Customer Induced (for transfer to SB A/c or \`SOL0340\` for cheque).
4. Enter Sundry A/c ID in A/c ID field (e.g., SOLID0337 for MIS).
5. Enter Amount, and Original A/c No in Ref No.
6. Click Go button adjacent to Restore Value. Select the interest entries, click Accept. Click Post.
7. Verification by Super via \`HTM\` (V-Verify).
`
  },
  {
    id: 'mis_td_scss_common_scss',
    sectionNumber: '5.7, 5.8, 5.9, 5.10, 5.11, 5.15, 5.17',
    title: 'Common Procedures (MIS/TD/SCSS)',
    categoryId: 'scss_td_mis',
    content: `
# Setup and Verification
* **CMISAOPM**: Modification Before Verification for TD/MIS.
* **CMISAOPV**: Verification of new MIS or TD Account by Super.

# Modification of Existing TD/MIS Account
* Used for Nomination addition/modification, converting Single to Joint / Joint to Single, and setting auto credit to SB A/c.
* **Menu:** \`CMISAM\` -> Function: **M-Modify** -> Enter A/c ID -> Visit Flow Tab -> Submit.
* Verification by Super uses **Menu:** \`CMISAM\` -> Function: **V-Verify**.

# To update Standing Instructions from MIS/TD to SB A/c
1. **Menu:** \`CMISAM\` -> Function: M-Modify
2. Enter A/c ID. Enter Interest Credit Account (SB account number).
3. Visit Flow Tab and Submit. Must be verified immediately to reflect in next interest cycle.

# View TD/MIS/SCSS Interest
1. **Menu:** \`HTDTRAN\` -> Enter A/C ID -> Click Go.
2. Click on Date to see details of transaction and where interest has been posted.

# TD/MIS/SCSS interest payment
1. Interest flows to Sundry accounts: MIS (\`SOLID0337\`), TD (\`SOLID0335\`), SCSS (\`SOLID0338\`).
2. **Menu:** \`HTM\` -> Function: A-Add.
3. **Transaction type:** Cash/Normal Payment (for cash) or Customer Induced (for transfer to SB A/c or \`SOL0340\` for cheque).
4. Enter Sundry A/c ID in A/c ID field (e.g., SOLID0337 for MIS).
5. Enter Amount, and Original A/c No in Ref No.
6. Click Go button adjacent to Restore Value. Select the interest entries, click Accept. Click Post.
7. Verification by Super via \`HTM\` (V-Verify).
`
  },
  // TD SECTIONS
  {
    id: 'td_menus_terms_10_1',
    sectionNumber: 'Menus & Terms',
    title: 'Menus & Common Terms',
    categoryId: 'td_general',
    content: `
# TD Account Related Menu for DOP Finacle
1. To open an account = **CMISAOP**
2. Verification by Supervisor = **CMISAOPV**
3. To modify an account before verification = **CMISAOPM**
4. To modify an account after verification = **CMISAM**
5. Inquiry of TD Interest Paid or not = **HIOT**
6. Transaction inquiry = **HTDTRAN**
7. Extension of a TD account = **HTDREN**
8. To close a TD account = **HCAACTD**
9. Verification of closer = **HCAACVTD**
10. Payment Closure proceed by Cash = **HCASHPND**
11. TD Renewal History = **HRENHIST**

# Terms used in TD Account
* **Extension:** Renewal of a Time Deposit
* **Principal Inflow (PI):** crediting deposit amount to the deposit account (happens only once at account opening).
* **Principal Outflow (PO):** payment of the deposit amount (principal). Normally used when interest is paid periodically, so on closure, customer only receives the principal.
* **Interest Outflow (IO):** paying periodical interest either cash or to savings account instead of crediting it to the Time deposit account.

# 4.1 About Time Deposit Account (TD)
* Normal tenures: 1 year, 2 years, 3 years and 5 years only.
* Deposit amount minimum Rs.200 and no maximum limit. All deposits in multiple of Rs.200.
* Interest is compounded quarterly.
* TD interest pay-out is on yearly basis. Transferred to SB account only.
* Auto renewal is enabled. Upon maturity, treated as renewed for the same period.
* Lock up period of 6 months. Premature closure before 1 year pays SB interest rate. Premature closure after 1 year pays 1% less than the applicable TD rate for the completed years.
`
  },
  {
    id: 'td_opening',
    sectionNumber: 'Opening & BO Opening',
    title: 'TD Account Opening',
    categoryId: 'td_general',
    content: `
# Time Deposit (TD) Account Opening (CMISAOP)
1. **Menu:** \`CMISAOP\` – Click Go
2. Enter the **CIF ID**
3. Select Product Group **TD**
4. Select Scheme code (\`TDIP1\`/\`TDIP2\`/\`TDIP3\`/\`TDIP5\`).
5. Click **Go**. Data populates.
6. Select Mode of operation: \`012\` (Self) / \`016\` (Joint-A) / \`017\` (Joint-B).
7. Enter **Interest Credit Account:** Enter SB A/c No. *(If opened by cheque, enter encashment date in Value date).*
8. Enter **Deposit Amount**. Maturity date will be shown.
9. Click Agent option (if any).
10. Click Agent ID Searcher, enter DSA name, select Agent ID.
11. **Nomination:** Enter Nomination Details, Nature of Entitlement - Owner/Trusteeship.
12. Enter Party details 2 (if joint account).
13. Auto Renewal details — **Renewal Option: Select "Principal only"**.
14. **Transaction Required** – Select **Yes**.
15. **Transaction type:** Select **Cash** or **Transfer**.
    * *Account transfer:* Enter Debit A/c ID as SB A/c ID.
    * *Non-DOP Cheque:* Enter Debit A/c ID as \`SOL0382\`.
16. **Documents Received:** Yes -> Number: \`1\`
17. **Document code:** \`016\` -> **Document Date:** Current date (Ctrl+X).
18. **Scan Details:** Scan not required -> **Documents Status:** Document Submitted.
19. Click **Submit**. Click OK. See details -> Click **Submit** again.
20. TD A/c ID & Txn ID will be generated. Note down.

# BO TD Account Open
Similar to normal TD Opening, with these specific changes:
* **Transaction type:** Transfer option.
* **Debit Account ID:** SOL id + BO id + N.
* Under Document Details -> **In case of BO TD account open:** (a) Select Branch office code from searcher (b) Enter RICT Reference no.
* **Verification by Supervisor = CMISAOPV**
`
  },
  {
    id: 'td_modification_inquiry',
    sectionNumber: 'Modification & Inquiries',
    title: 'Modification & Interest Inquiries',
    categoryId: 'td_general',
    content: `
# TD A/c Modification Before Verification
*(PA may modify the new TD or MIS A/c opened by him)*
1. **Menu:** \`CMISAOPM\` – Go
2. **Function:** M-Modify -> Enter TD A/c ID – Go
3. Modify field -> Visit Flow Tab -> **Submit**

# Verification of new TD Account
1. **Menu:** \`CMISAOPV\` – Go
2. **Function:** V-Verify -> Enter TD A/c ID – Go
3. Check General TAB and Flow TAB/PAGE -> **Submit**

# Modification of Existing TD Account
*(For Nomination addition/modification and Entering auto credit to SB A/c)*
1. **Menu:** \`CMISAM\` – Click Go
2. **Function:** M-Modify -> Enter TD A/c ID – Go
3. Modify required field -> Visit Flow Tab -> **Submit**
*(Verification: \`CMISAM\` -> V-Verify -> Check details -> Flow Tab -> Submit)*

# To update Standing Instructions from MIS/TD to SB A/c
1. **Menu:** \`CMISAM\` – Go -> **Function:** M-Modify
2. Enter TD A/c ID – Go -> Enter SB account number in Interest Credit Account.
3. Visit Flow Tab -> **Submit**. *(Must be verified by Super immediately via \`CMISAM\`)*.

# View TD Interest (To view Interest amount)
1. **Menu:** \`HTDTRAN\` – Go
2. Enter TD A/C ID -> Go
3. Click on **Date** to see details of transaction and where the interest has been posted.

# View TD/MIS/SCSS Interest (Pre-migrated interest & payment status)
1. **Menu:** \`HIOT\` – Click Go -> Click **Submit** in next screen.
2. Enter **SOL Set ID** -> Enter **Sundry A/c of TD**.
3. Clear Start date. End date: Current date.
4. Ref No.: Enter TD A/c ID -> Submit.
*Due amount is shown in Transaction Amt column. If Reverse Amt is “0”, it's not paid yet.*
`
  },
  {
    id: 'td_interest_payment',
    sectionNumber: 'Interest Payment',
    title: 'TD Interest Payment',
    categoryId: 'td_closure',
    content: `
# TD INTEREST PAYMENT
* Interest of **1 YR TD** account flows to TD Sundry office account no. **SOLID0129**.
* Interest of **2 YR TD** account flows to **SOLID0130**.
* Interest of **3 YR TD** account flows to **SOLID0131**.
* Interest of **5 YR TD** account flows to **SOLID0132**.
*(Interest of 5 YR TD before 01.09.2017 flows to SOLID0335).*

1. **Menu:** \`HTM\` – Click Go. -> **Function – Add**
2. **Transaction type/sub type:**
   i) **Cash/Normal Payment** for Cash.
   ii) **Customer Induced** for Transfer to SB A/c.
   iii) **Customer Induced** for Transfer to \`SOL0340\` (Postmaster’s cheque a/c).
3. Click **Go** button.
4. First give **TD A/c ID** in the box and click **Signature** button to check. Then **close it and delete** the TD A/c no.
5. **A/c ID:** Enter **Sundry A/c ID** (e.g. SOLID0132) for TD Interest.
6. **Ref.CCY/Amt:** Enter 1 (or exact amount).
7. **Ref No:** Enter TD A/c No.
8. Click **Go** button adjacent to restore value.
9. Delete Start Amt and End Amt. Enter TD A/c No in Ref No. Click **Go**.
10. Check the box on the left for the due interest.
    * *(If amount differs from page 1, Reversing Amount will show 1.00. Click back twice, modify Ref.CCY/Amt field to exact interest amount, then proceed again and check the box).*
11. Click **Accept**, then click **Post** (or click Add -> Credit Option -> enter SB A/c ID -> Contra -> Post).
12. Transaction ID generated.
13. **Verify** by Super using \`HTM\` (Function: Verify).
`
  },
  {
    id: 'td_closure_renewal',
    sectionNumber: 'Closure & Renewal',
    title: 'TD Closure, Payment & Renewal',
    categoryId: 'td_closure',
    content: `
# Closer of TD A/c (HCAACTD)
1. **Menu:** \`HCAACTD\` – Click Go
2. **Function:** Z-Close
3. Enter TD A/c No.
4. Click Go -> "Pay all unpaid interest from Sundry Account" (Click OK).
5. Click **"Closer Details"** TAB. Select Close mode:
   * **Transfer:** Select SB A/c option. Enter Customer's SB Account No.
   * **Cheque:** Select Repayment A/c option (\`SOLID0340\`).
   * **Cash:** Select Cash only and INR.
6. Click **"Closer Exception"** TAB.
7. Select **Reason Code:** \`NORML\` (Maturity/Premature) or \`DTCLM\` (Death).
    *(Select NO option in Collect Penal Int for Death claim).*
8. Click **Submit**. *(Note: No Tran ID is generated in case of closer).*

# Verification of closer (HCAACVTD)
1. **Menu:** \`HCAACVTD\` – Click Go -> **Function:** Verify
2. Enter TD A/c No. -> Go.
3. Visit Closer Details TAB -> Visit Closer Exception TAB -> **Submit**.
*(If premature, an EXCEPTION "Premature Closer" appears. Click Accept).*

# Cash payment (below Rs. 20,000/-) of TD (two extra steps)
**1. Payment by PA:**
1. **Menu:** \`HCASHPND\` – Go -> **Function:** Process.
2. Enter TD A/c No -> Go.
3. Click on Sl. No. (\`00001\`/\`00002\`).
4. Click **Post**. (Accept exception). Note Transaction ID.
**2. Verification By SUPER:**
1. **Menu:** \`HTM\` – Go -> **Function:** Verify. Enter Transaction ID -> Submit.

# TD ACCOUNT RENEWAL
1. **Menu:** \`HTDREN\` – Click Go -> **Function:** Renewal
2. Enter **TD A/c No.** -> Click Go.
3. **Effective Open Date:** Date of maturity.
4. **Renewal Option:** Principal Only.
5. **Calculate overdue Interest:** No.
6. **Renewal Scheme code:** \`TDIP1\`/\`TDIP2\`/\`TDIP3\`/\`TDIP5\`.
7. **Renewal Period:** Same as Scheme Type.
8. **Renewal CCY:** INR.
9. **Print Renewal Conformation:** Immediate.
10. Click **Submit**.
`
  },
  // SCSS EXTRA SECTIONS
  {
    id: 'scss_general_10_12',
    sectionNumber: '6.12, 6.13, 6.25',
    title: 'SCSS Account & TDS',
    categoryId: 'scss_td_mis',
    content: `
# 6.12 About Senior Citizen Savings Scheme (SCSS)
* Age 60+ (or 55+ for VRS). Minimum Rs. 1000/-, Maximum Rs. 15 lakhs.
* Cash allowed below INR 1 lakh. Above 1 lakh requires cheque.
* No withdrawal permitted before 5 years. Lock in period is 1 year.
* Premature closure penalty: 1-2 years (1.5% of Principal), above 2 years (1% of Principal).
* Quarterly interest (1st working day of April, July, Oct, Jan).
* PAN card is mandatory.

# 6.25 Submission of 15G/15H in SCSS Accounts
1. \`CMRC\` -> Inquire -> Check Tax Deduction at Source table code. Ensure it is NOTAX.
2. **Menu:** \`CSCAM\` -> Function-Modify. Enter SCSS A/c ID.
3. Delete "NONE" in Tax Form. Select \`15H/15G\`.
4. In Tax Category field, Select - \`No tax\` option. Submit and Verify.

# 6.26 Refund of TDS if wrongly deducted
1. Write in Error Book.
2. **Menu:** \`HRFTDS\` -> Enter SCSS account ID -> Trantype: Transfer.
3. Enter Refund A/c ID (Customer's SB a/c or \`0340\` for cash). Submit.
*Note: Make refund before submission of tax returns by HO.*
`
  },
  {
    id: 'ssa_menus_opening',
    sectionNumber: '7.1',
    title: 'SSA Menus & Account Opening',
    categoryId: 'ssa_general',
    content: `
# 7.1 SSA Account Related Menus in Finacle
1. Account opening = **CPPFAO**
2. Verify by supervisor = **CPPFAV**
3. Modify SSA Account before verification = **CPPFAOM**
4. Modify SSA Account After Verification = **CPPFAM**
5. First deposit and Subsequent deposit = **CPDTM**
6. Reversal of SSA Deposit = **CPWTM**
7. Closure of SSA Account and verify = **HCAAC**

# 7.2 How to open a BO SSA Account
1. **Menu:** \`CPPFAO\` – Click Go
2. Enter the **CIF ID**. All the data of the customers as per the CIF id will get populated.
3. **Scheme code:** \`SSA\`
4. Click **Go**
5. The **Mode of operation** – \`019\`
6. **Document Received Status:** Yes
7. **No of Document Received** - \`1\`
8. **Branch Office:** Select from Searcher
9. **RICT No:** Enter RICT Unique Number
10. **Document Details 1:**
    * **Document Code:** \`016\`
    * **Document Date:** Current Date
    * **Scan Details:** Scan Required
    * **Document Status:** Sent to CPC
11. Fill Nomination Details
12. **Nature of Entitlement:** Owner
13. Click **Submit**. A message will come "This account will be marked as INVALID if not funded immediately"
14. Click **OK**.
*SSA A/c ID will be generated, Note down the Numbers on AOF.*

# 7.3 Verify By Supervisor
1. **Menu:** \`CPPFAV\` – Go
2. **Function:** Verify
3. **Account ID:** Enter SSA A/C No
4. Click **Go** and Verify All the Details
5. **Submit**
`
  },
  {
    id: 'ssa_deposit_funding',
    sectionNumber: '7.4',
    title: 'Funding, Deposits & Withdrawal',
    categoryId: 'ssa_deposit_withdrawal',
    content: `
# 7.4 Funding SSA Account
Enter the menu **CPDTM**, select **Add** » **Bank Transfer** » **Normal Contribution**, click on **Go**. You should see the following window.

Enter the following details:
* **Account Number (Cr):** SSA account number
* **Account Number (Dr):** Sol id + BO id + N
* **Ref CCY/Amount:** Enter the deposit Amount
* **RICT UNIQUE NO:** RICT reference number
* Click on the Search icon next to **Account Number (Dr)**. A window will pop-up.
* Click on **Submit** icon to get the Account ID result at the bottom. Select the account id. The pop-up will disappear.
* Click on **Submit**.

# 7.5 SSA Deposit (CPDTM)
1. **Menu:** \`CPDTM\` -> **GO**
2. **Function Code:** Add
3. **Tran Type/Sub Type:** C/NR-Cash Normal Receipt
4. **Type:** Normal Contribution -> **Go**
5. **Account Number (Cr):** Enter SSA A/C No
6. **Ref CCY/Amount:** Enter Deposit Amount
7. **Submit**
8. Note the Transaction ID and verify from supervisor in same menu (\`CPDTM\`).

# 7.6 SSA Withdrawal (CPWTM) - Reversal
1. **Menu:** \`CPWTM\` -> **GO**
2. **Function Code:** Add
3. **Tran Type/Sub Type:** C/NP-Cash Normal Payment
4. **Type:** Normal Withdrawal -> **Go**
5. **Account Number (Dr):** Enter SSA A/C No
6. **Ref CCY/Amount:** Enter withdrawal/reversal Amount
7. **Report Code:** REVRS
8. **Submit**
9. Note the Transaction ID and verify from supervisor in same menu (\`CPWTM\`).
`
  },
  {
    id: 'ssa_claim',
    sectionNumber: '7.7',
    title: 'SSA Claim Procedure',
    categoryId: 'ssa_claim',
    content: `
# 7.7 SSA Claim Procedure in Finacle

**Short Note:**
* Mark & verify the depositor CIF as Deceased.
* Change Interest rate in Interest Table using \`HINTTM\`.
* Interest Code \`SBINT\` after date of death.
* Close Account using \`HCAAC\` with Reason Code as \`DTCLM\`.

**Detailed Procedure:**
1. In \`CMRC\`, for respective CIF, mark Depositor as 'DECEASED' and update Date of Death. CIF will be Suspended. Next Verify it in \`CMRC\`.
2. For SSA A/c, from date of death till date of closure, SB rate of interest is allowed and hence Int Table Code: \`SBINT\` is to be added through \`HINTTM\` menu for such SSA A/c from date subsequent to date of death using Modify Option (Supervisor) and then it must be Verified (Supervisor).
3. *(This entry in HINTTM menu should be in addition to Interest Table Code of SSA scheme, which where Start Date will be A/c opening date and End Date should be marked as Date of Death.)*
4. After making changes in \`HINTTM\`, SSA A/c is to be closed in \`HCAAC\` menu with Reason Code: \`DTCLM\`.
5. **Menu:** \`HCAAC\` -> Go
6. **Function:** Z-Close
7. **Enter Account ID:** Enter SSA A/c ID to be closed
8. Check Transfer box
9. **Transaction type:** \`transfer\`
10. **Transfer A/c ID:** Enter an SB A/c number of Guardian
11. Click **Go**. New window opens.
12. Click **Closer** Tab. Select **Reason Code** (\`DTCLM\`) from searcher.
13. Click **Submit**.

*Note the Tran ID. Post the Tran ID by counter PA using HTM Menu (function-Modify). Verify the Tran ID by super-using Menu HTM.*

*Verify the Account closer of (SSA) using Same Menu HCAAC.*
`
  },
  {
    id: 'inv_movement',
    sectionNumber: '10.1',
    title: 'Inventory Movement (HIMC)',
    categoryId: 'inv_movement',
    content: `
# 10.1 About Inventory Movement
Cheque Book is valuable items. In Finacle this is called Inventory item.
- \`ZZ-EXT\`: External Location Class is ZZ and Location Code is EXT.
- \`DL-DL\`: Main Stock Location Class and Location Code both are called DL (Double Lock).
- \`EM-Employee ID\`: Employee Location Class is EM and Location Code is Employee ID of the Counter PA.
- \`DS-DS\`: Destroy Location Class and Location Code both are called DS.

Movement of inventory happens from PSD to Head Post Office, then sub offices.
- Finacle movement: **ZZ-EXT** to **DL-DL** -> **DL-DL** to **EM-Employee ID**
- Reversal: **EM-Employee ID** to **DL-DL** -> **DL-DL** to **ZZ-EXT** or **DS**
- In offices with more than one Supervisor, one enters and another authorizes. In Single/Double/Triple handed office with only one supervisor, entered and authorized by the same Supervisor.

# 10.2 Movement from External to Main Stock (Double Lock)
1. **Menu:** \`HIMC\` -> Click Go
2. **Function:** Add
3. Click Go. A new Window will come.
4. **From Location Class:** \`ZZ\` | **From Location Code:** \`EXT\`
5. **To Location Class:** \`DL\` | **To Location Code:** \`DL\`
6. Click **Accept** button, a new window will open.
7. **Inventory Class/type**: Click the Searcher. Select Inventory code from the list. Click the Class.
8. Enter **Alpha no** if any otherwise skip.
9. Enter **Start No** and **End No** of the item.
10. Click **Validate** button - Quantity will be shown automatically. [Must after every entry made]
11. Click **Submit** button. *Do not click on Add Button if there is no more item to be entered. If Add button is pressed accidentally, one blank record will be added, and it will not allow to submit the inventory with blank record. There is no way to delete any entered record. In that case whole thing have to be reentered again. Click Add Button, if more entry has to be made. Here modification of any record is possible.*
12. Transaction ID will be generated. Note down in a blank sheet of paper.

# 10.3 Verification by Supervisor
**At Single Handed Office [Where Supervisor himself is Authoriser]:**
1. **Menu:** \`HIMC\` -> Go
2. **Function:** Verify
3. Enter Transaction ID generated during Inventory entry.
4. Click Go. New window will come, where the entire inventory entered will be shown.
5. Click **Submit** Button (Nothing to do). A message will come, Transaction ID…… Authorized successfully.

**At Head Office or Sub Office where more than one Supervisor exists:**
1. **Menu:** \`HIMC\` -> Go
2. **Function:** Verify
3. Enter Transaction ID and click Go.
4. Click **Authorizer details TAB**.
5. Select radio button next to authorizer.
6. Click **Authorize** button.
7. Enter password of the custodian, Click Login, Click Submit.

# 10.4 If the Transaction ID could not be noted for any reason
1. **Menu:** \`HIMI\`
2. Select Inventory transaction status as "Entered but not Authorized"
3. Click Go button. The Inventory ID will be shown.

# 10.5 Movement From Main stock (Double Lock) To Counter
1. **Menu:** \`HIMC\` -> Go
2. **Function:** Add -> Go
3. **From Location Class:** \`DL\` | **From Location Code:** \`DL\`
4. **To Location Class:** \`EM\` | **To Location Code:** Select Employee Code from Searcher
5. Click **Accept** button. A new window will open.
6. **Inventory Class/type**: Click the Searcher. Inventory entered in the Double Lock will be shown here. To select the Inventory item which is to be sent to counter, click the Inventory Class/Type (CHQ\\CHQ) against the Inventory item.
7. Total Quantity available for the item in the Double lock will be shown in the quantity box. 
   - *If total quantity is to be transferred to counter, jump to Step 8.* 
   - *If total quantity is not required to be transferred to counter, the figure shown in the quantity box has to be deleted first.*
8. Enter the **End Serial no.** in the End No. box.
9. Click **Validate** button- Number of items required to be transfer to counter will be shown automatically in the quantity box.
10. Click **Submit** button. (Remember the Add button warning). Note down Transaction ID.

# 10.6 Return of Inventory to Double Lock (Main Stock) from Employee (Counter)
If for any reason inventory given to a counter PA has to be returned to the main stock.
1. **Menu:** \`HIMC\` -> Go
2. **Function:** Add -> Go
3. **From Location Class:** \`EM\` | **From Location Code:** Enter Employee Code
4. **To Location Class:** \`DL\` | **To Location Code:** \`DL\`
5. Click **Accept** button.
6. Enter Inventory Class/type: Click the Searcher. From the list click the Inventory Class/Type which is to be return to main stock.
7. Click **Validate** button.
8. Click **Add** Button if more entry has to be made, or Click **Submit**. Note Transaction ID.
9. Verify using Supervisor process (same as ZZ-EXT to DL-DL).

*Note: To return the stock from DL/DL to ZZ/EXT, same procedure to be applied. This will be required to return the stock to HO/PSD.*
`
  },
  {
    id: 'inv_split_merge',
    sectionNumber: '10.7',
    title: 'Splitting and Merging Inventories',
    categoryId: 'inv_cheque_split_merge',
    content: `
# 10.7 Splitting of Cheque Book
Cheque Books given to counter must be split as it has been taken in a lot. Splitting can be done by Supervisor. Here no need to verify the splitting.
1. **Menu:** \`HISIA\` -> Click Go
2. **Function:** Split
3. **Location Code:** Click the Searcher. Select the Employee code of the Counter PA, where the cheque leaves has been given.
4. **Inventory Class:** Click searcher. Select \`CHQ\` from the list.
5. Click **Go**.
6. Select the entry by clicking \`CHQ/CHQ\` on left. Another window appears.
7. Start Sl No. and total quantity will show.
8. **Total No of units:** Enter total no. of cheque book.
9. **Items per unit:** Enter number of leaves in a cheque book.
10. **Submit**. A message will come "Inventory split is successful".

# 10.8 Merging of Cheque Book
Merging of inventory refers to consolidation of inventory held in various small lots into a bigger lot. This option is used to transfer the unutilised inventory held by an employee to double lock custody. Usually when one user is transferred from one office to another, the splitted cheque books given to his/her employee location, needs to be merged first to return it back to Double Lock (Main Stock).
1. **Menu:** \`HIMIA\` -> Click Go
2. **Function:** M-MERGE
3. **Location Code:** Click Searcher. Select the Employee Code of the person from the List. The inventory items (Splitted cheque Books) of this user will be merged.
4. Enter **Inventory Class**, Select \`CHQ\` from Searcher.
5. Click searcher of Start Alpha/Srl. No. box.
6. Click on **Begin Serial number** of the splitted cheque books (from which serial number, merging is required) from the list.
7. Enter **Quantity** (Total No of leaves to be merge).
8. Click **Go**. A new window comes. Details of merged inventories will be displayed.
9. Click **Submit** button. A message will come "The selected inventory is merged successfully"
`
  },
  {
    id: 'inv_ho_to_so',
    sectionNumber: '10.9',
    title: 'Inventory Movement from HO to SO',
    categoryId: 'inv_ho_to_so',
    content: `
It is common practice of sending stock to SOs from HO. We can directly transfer stock from HO to SO in Finacle.

# 10.9 Step 1: Move Stock to ZZ-EXT at HO
1. At HO, identify the stock to be sent to SO.
2. **Menu:** \`HIMC\` -> **Function:** Add -> Go
3. **From Location Class:** \`DL\` | **From Location Code:** \`DL\`
4. **To Location Class:** \`ZZ\` | **To Location Code:** \`EXT\`
5. Click **Accept**, search Inventory class/type, select item, enter start no and quantity, validate.
6. Click **Submit** and note the transaction ID.
7. Verify the Inventory using \`HIMC\` -> Verify (same verification process).

# 10.10 Step 2: Change Context SOL ID
1. **Menu:** \`HCCS\` -> Go
2. **Enter New Context Sol ID:** The SOL ID to which stock is being given (the SO).
3. Click **Submit**.

# 10.11 Step 3: Receive Stock at SO (Done by HO supervisor)
After Changing the Context Sol id the supervisor will again use HIMC to transfer certificates from ZZ-EXT to DL-DL (This DL-DL belongs to the SO to which stock is being sent).
1. **Menu:** \`HIMC\` -> **Function:** Add -> Go
2. **From Location Class:** \`ZZ\` | **From Location Code:** \`EXT\`
3. **To Location Class:** \`DL\` | **To Location Code:** \`DL\`
4. Click **Accept**, search Inventory class/type, select the inventory you are receiving, enter start no. and quantity.
5. Click **Submit** and note transaction ID. Send physically to SO along with this ID.

# 10.12 Step 4: Verification at SO
At SO after receiving the physical stock, verify the transaction id using HIMC.
1. **Menu:** \`HIMC\` -> **Function:** Verify -> Go
2. Enter Transaction ID -> Authorize details -> Authorize (using authorizer password).
3. Click **Submit**. Transaction id verified successfully.
`
  },
  {
    id: 'inv_inquiry',
    sectionNumber: '10.13',
    title: 'Inventory Inquiry (HIIA / HISI)',
    categoryId: 'inv_inquiry',
    content: `
# 10.13 Inquiry of Inventory
Inquiry of inventory can be done for any location. From this inquiry Double Lock stock and counter stock of every item or a particular item can be seen. Details of the stock is also available.

## To see Particular counter and All or Particular inventory item
1. **Menu:** \`HIIA\` and Click Go
2. **Location Code:** Click searcher to select Employee code of a particular counter PA
3. **Inventory class:** Do not select any inventory class, to see all the item or Click Searcher to select a particular Inventory class like CHQ or any other item.
4. Click **Go**
5. In the new window, click **View details** button to see the details.

## To see Double Lock Stock - All or Particular inventory item
1. **Menu:** \`HIIA\` and Click Go
2. **Location Class:** Delete the entry and Click searcher to select \`DL\`.
3. **Location Code:** Delete the entry and Click searcher to select \`DL\`.
4. **Inventory class:** Do nothing to see all the inventory item or Click Searcher to select a particular Inventory class like CHQ etc.
5. Click **Go**
6. Click **View details** button to see the details.

# 10.14 Inventory Inquiry (HISI)
1. **Menu:** \`HISI\`
2. Select the function **Inquire**
3. Click **Go**
4. System will display all the stock available at particular location (counter PAs).
`
  },
  {
    id: 'inv_cheque_issue',
    sectionNumber: '10.15',
    title: 'Issue & Inquiry of Cheque Book',
    categoryId: 'inv_cheque_mgt',
    content: `
# 10.15 Issue of Cheque Book (HICHB)
1. **Menu:** \`HICHB\` – Click Go
2. **Function:** Issue
3. **Acknowledgement radio button:** Select "Yes" option.
4. **A/C Id:** Enter SB Account ID in which Cheque book to be issued.
5. **Cheque Type:** Select from searcher as \`CHQ\`
6. Click **Go**. New window is opened.
7. A list of cheque book will show. Select the check box at left to select the Cheque book to be issued. The Cheque book should be issued serially.
8. Click **Submit**. A message will come "Cheque book issued successfully to A/c ID".

# 10.16 Issue of Cheque Book Verification (HICHB)
1. **Menu:** \`HICHB\` and Click Go button
2. **Function:** Select Verify
3. **A/c ID:** Enter the SB Account no.
4. Click **Go**. New window opens.
5. In the next screen click **Submit**. A message will come "verified successfully".

# 10.17 Cheque Book Inquiry (HCHBI)
1. **Menu:** \`HCHBI\` – Click Go
2. **A/C ID:** Enter SB A/c no 
3. Click **Go**
4. Click **View details**.

# 10.18 To find an Account number by a Cheque Number (HINQACHQ)
1. **Menu:** \`HINQACHQ\` – Click Go
2. Enter **Cheque No.** 
3. Click **Go**
4. In the next screen A/c ID will show along with A/c Holders name.
`
  },
  {
    id: 'inv_cheque_stop_destroy',
    sectionNumber: '10.19',
    title: 'Stop Payment & Destroy Cheque',
    categoryId: 'inv_cheque_mgt',
    content: `
# 10.19 STOP PAYMENT (HSPP)
Stop payment of a cheque referred to when the cheque is lost or damaged. This is a precautionary step to stop cheque being realized by the person not entitled to it.
1. **Menu:** \`HSPP\` – Click Go.
2. **Function:** Stop Pay
3. **A/c ID:** Enter SB A/C no
4. **Begin Chq No.:** In case only one cheque leaf, enter the Cheque no. which has to be stopped. In case more than one cheque leaf, enter the Begin Cheque No. from which cheques have to be stopped.
5. **No. of leaves:** Enter no. of cheque leaf/leaves. In case of one cheque has to be stopped enter 1 here. In case of more than one cheque has to be stopped enter the number of cheques to be stopped.
6. Click **Go**.
*If number of cheque leaf is only one in the next Screen:*
7. Enter Payee name
8. Enter Chq. Date
9. Enter Chq. Amt.
*(In case of more than one cheque do not enter these information)*
10. Select **Reason code** from searcher only (e.g. 001-chq reported Lost)
11. **Submit**. Note Ref No.

## VERIFICATION PROCESS BY SUPERVISOR (HSPPAU)
1. **Menu:** \`HSPPAU\` – Click Go
2. **Function:** Verify
3. Enter the **Ref No** and click outside. All the information will show.
4. Click **Go**
5. Details will be shown. Click Cheque details to check.
6. Click **Submit**
*Note 1: You can see the stop payment information by invoking the menu \`HCHBI\`, Enter A/c ID and click Go. Now view details (refined search available). Select Back button to return.*
*Note 2: Stop pay report can be seen from \`HPR\` menu.*

# 10.20 Revoking Stop payment (HSPP)
1. **Menu:** \`HSPP\` – Click Go.
2. **Function:** Revoke Stop Pay
3. **A/c ID:** Enter SB A/C no
4. Enter **Begin Chq No.**
5. **No. of leaves:** Enter no. of cheque leaf/leaves
6. Click **Go**. New window opens
7. Click **Submit**
8. Note Down the Ref No.
Verify the Revoking of Stop payment using menu \`HSPPAU\`.

# 10.21 CHEQUE BOOK DESTROY PROCEDURE (HCHBM)
Before closing SB cheque account cheque book or remaining cheque leaves must be destroyed first.
1. **Menu:** \`HCHBM\`- Click Go
2. **Function:** D-Destroy
3. **A/c ID:** Enter Account ID where cheque book was issued.
4. **Begin Cheque Number:** Enter begin cheque number from where it will be destroyed.
5. **No of Leaves:** Enter the number of remaining cheque leaves.
6. Click **Go**. A new window will come with details.
7. **Submit**
8. Verification with the same menu \`HCHBM\`. Function - **Verify**

## Other functions of the Menu HCHBM
To inquire about cheque book: If the cheque is not recognized in Finacle. The main cause maybe it has not been Acknowledged. Use Acknowledge function and verify it with supervisor.
`
  },
  {
    id: 'inv_atm_mgt',
    sectionNumber: '10.22',
    title: 'ATM Card Issue & Replacement',
    categoryId: 'inv_atm_mgt',
    content: `
# 10.22 ATM CARD ISSUE (CCMM)
1. **Menu:** \`CCMM\` – Click Go
2. **Function:** Add
3. **CIF ID:** Enter CIF ID -> Click Go. A new Window will come.
4. **Account No:** Click on searcher and select.
5. **Card Type:** Personalized/Instant
6. **Kit No:** Enter Kit No and Hit tab Key
7. **Primary Account Flag:** Yes
8. **Action:** New Card Request
9. **Submit**
10. Verify using same menu by supervisor (\`CCMM\`)

# 10.23 ATM CARD REPLACEMENT (CCMM)
1. **Menu:** \`CCMM\` – Click Go
2. **Function:** Modify
3. **CIF ID:** Enter CIF ID
4. **Card No:** Click on searcher and select.
5. Click **Go**. A new Window will come.
6. **Action:** Replacement
7. **Card Type:** Click on 'instant radio button'
8. **Kit No:** Delete existing Kit no and Enter New Kit No
9. Ensure that the product type should populate as \`EMV608\`
10. **Validate**
11. **Submit**
12. Verify using same menu by supervisor (\`CCMM\`)
`
  },
  {
    id: 'ppf_opening_deposit',
    sectionNumber: 'Opening & Deposit',
    title: 'Account Opening & Deposit',
    categoryId: 'ppf_general',
    content: `
# 8.1 PPF Deposit (CPDTM)
1. Invoke \`CPDTM\` menu
2. **Function:** Add
3. **Transaction type/subtype:** Cash normal receipt / Customer transfer for POSB cheques and Bank cheques.
4. **Type:** Normal contribution
5. Click on **GO (F4)**
6. Enter **A/C number (Cr)**
7. Enter **A/C number (Dr)** in case of customer transfer/bank induced
8. **For Bank Induced transaction:** Debit A/c ID is \`SOLID\` followed by \`0017\`
9. Enter the amount
10. Click on **submit (F10)**
11. Note down the Transaction id and verify the same in the same menu in supervisor login

**Note:**
1. For Deposit through POSB cheque, use customer induced option and Customer’s SB account ID as Debit A/C ID.
2. For Deposit through Bank cheque, use customer induced option and \`SOLID+0017\` as Debit A/C ID. Change the value date as cheque clearance date.

# 8.2 Account Opening (CPPFAO)
1. Invoke \`CPPFAO\` menu
2. **Function:** Open
3. Enter **CIF ID**
4. Enter Scheme Code - \`PPF\`
5. Click on **GO (F4)**
6. Enter **Mode Of Operation**
7. Select **No.Of Documents Received** as NO
8. Enter Nomination if any
9. Click on **SUBMIT (F10)**
10. Note down the A/C ID and Verify the same in the supervisor login using \`CPPFAV\` menu.
11. Do the Funding using \`CPDTM\` menu
12. Verify the Funding in supervisor login in the same menu.

**Note 1:**
1. For Opening through POSB cheque, use Customer’s SB account ID as Debit A/C ID.
2. For Opening through Bank cheque, use \`SOLID+0382\` as Debit A/C ID. Change the value date as cheque clearance date.

**Note 2:** We can choose Documents Received as NO as we are not sending any documents for scanning at CPC.

# 8.11 Change of Nomination (CPPFAM)
**Case 1 – Giving nomination for first time**
1. Invoke the menu \`CPPFAM\`
2. **Function:** Modify
3. Enter the A/C number and press tab button on keyboard.
4. View the signature if necessary (F9)
5. Click on **GO (F4)**
6. Choose Nomination as Yes, note down the nomination number.
7. Enter nominee details, nominee relation code (choose only numerical codes) and nomination percentage.
8. Click on **SUBMIT (F10)**
9. Verify the A/C number in the same menu in supervisor login.

**Case 2 – Deleting existing nomination**
1. Invoke the menu \`CPPFAM\`
2. **Function:** Modify
3. Enter the A/C number and press tab. View signature (F9) if needed.
4. Click on **GO (F4)**
5. Near nominee details you will see a check box with label ‘**Del**’. Tick it.
6. Click on **SUBMIT (F10)**
7. Verify in supervisor login.

**Case 3 – Changing Nomination**
1. Follow the steps in Case 2 and delete the nomination first.
2. Add a new nomination using steps in Case 1.

# 8.4 Account Extension (HCEXTN)
1. Invoke \`HCEXTN\` menu
2. **Function:** Extend
3. Enter A/C Number
4. Click on **SUBMIT(F10)**
5. Verify the Extension in the same menu in supervisor login.
`
  },
  {
    id: 'ppf_loan',
    sectionNumber: 'Loan',
    title: 'Loan Opening, Disbursement & Repayment',
    categoryId: 'ppf_loan',
    content: `
# 8.5 Loan Account opening (CLPPFAO)
1. Invoke \`CLPPFAO\` menu
2. **Function:** Open
3. Enter CIF ID & PPF A/C ID
4. Click on **GO(F4)**
5. Select Disbursement Type - Cash/Transfer
6. For Transfer, Enter Disbursement Credit A/C ID
7. Enter Sanction Limit - Loan Amount
8. Check the Maximum Sanction Limit Amount Field
9. Click on **SUBMIT(F10)**
10. Verify the Transaction in supervisor login using \`CLPPFAOV\` menu.

# 8.6 Loan Disbursement (CPWTM)
1. Invoke \`CPWTM\` menu
2. **Function Code:** ADD
3. **Transaction Type/Sub Type:** Cash Normal Payment/Customer Transfer
4. **Type:** Loan Disbursement
5. Click on **GO(F4)**
6. Enter Credit Account ID - For Customer Transfer
7. Enter Debit Account ID - PPF A/C ID
8. Enter Amount - LOAN AMOUNT
9. Enter Appropriate Report Code
10. Enter PAN Number if amount Exceeds Rs.50000/-
11. Click on **SUBMIT(F10)**
12. Note down the Transaction ID and verify the same in supervisor login.

# 8.7 Loan Repayment (CPDTM)
1. Invoke \`CPDTM\` menu
2. **Function:** ADD
3. **Transaction Type/Sub Type:** Cash Normal Receipt/Customer Transfer
4. **Type:** Loan Principle Repayment/Loan Interest Repayment
5. Click on **GO(F4)**
6. Enter Credit A/C ID - Loan A/C ID
7. For Customer Transfer, Enter Debit A/C ID
8. Enter Amount
9. Click on **SUBMIT (F10)**
10. Note down the transaction ID and verify in supervisor login.

# 8.8 Loan Final Repayment
**Step 1: Repayment Of Loan**
Follow the same CPDTM steps as 5.7 (Cash Normal Receipt/Customer Transfer), Type: Loan Principle Repayment/Loan Interest Repayment. Submit and verify.

**Step 2: Process Using CLPR**
1. Invoke \`CLPR\` menu in supervisor login
2. **Function Code:** Process
3. Enter The A/C ID
4. Click on **GO(F4)** and **SUBMIT(F10)**

**Step 3: Interest Postings**
1. Then, \`HACINT\` is to be invoked by CEPT team (at present). On invoking this, the interest for loan account is calculated and posted in PPF loan account.
2. The loan interest has to be paid through \`CPDTM\` menu again, if the PPF account is not a matured account.

# 8.9 Loan Account Closure
Loan A/C Closure includes the exact same 3 steps as Loan Final Repayment (CPDTM Repayment, CLPR Process, HACINT Interest by CEPT). Step 4 is paying the interest again via CPDTM if not matured.
`
  },
  {
    id: 'ppf_withdrawal_closure',
    sectionNumber: 'Withdrawal & Closure',
    title: 'Partial Withdrawal, Closure & Reversal',
    categoryId: 'ppf_withdrawal_closure',
    content: `
# 8.10 Partial Withdrawal (CPWTM)
1. Invoke \`CPWTM\` menu
2. **Function Code:** ADD
3. **Transaction Type/Sub Type:** Cash Normal Payment/Customer Transfer
4. **Type:** Normal Withdrawal
5. Click on **GO(F4)**
6. Enter Credit Account ID - For Customer Transfer
7. Enter Debit Account ID - PPF A/C ID
8. View Signature(F9)
9. Enter Amount
10. Enter Appropriate Report Code
11. Enter PAN Number if amount Exceeds Rs.50000/-
12. Click on **SUBMIT(F10)**
13. Note down the Transaction ID and verify the same in the same menu in supervisor login.

# 8.3 Account Closure (HCAAC)
1. Invoke \`HCAAC\` menu
2. **Function:** Close
3. Enter the A/C number
4. Select the transaction type as Cash/Transfer (For COUNTER PA login, follow same steps)
5. Click on **GO(F4)**
6. Go through A/C information and Closure tabs
7. Enter the appropriate closure reason code in Closure tab
8. Enter Amount
9. Click on **SUBMIT(F10)**
10. Verify the closure in supervisor login using the same menu

# 8.12 Reversal (CPWTM)
In some cases, we may deposit the amount in wrong PPF A/C other than the intended one or we may deposit excess amount in any account. Do the reversal operation by following steps:
1. Invoke \`CPWTM\` menu
2. **Function Code:** ADD
3. **Transaction Type/Sub Type:** Customer Transfer
4. **Type:** Normal Withdrawal
5. Click on **GO (F4)**
6. Enter Credit Account ID - Target PPF A/C ID
7. Enter Debit Account ID - Source PPF A/C ID
8. Enter Amount
9. Enter the Value Date - Transaction Date
10. Enter Appropriate Report Code - Reversal
11. Enter PAN Number if amount Exceeds Rs.50000/-
12. Click on **SUBMIT (F10)**
13. Note down the Transaction ID and verify the same in supervisor login.
`
  },
  {
    id: 'ppf_transfer',
    sectionNumber: 'Bank Transfers',
    title: 'Transfer In/Out From/To Bank',
    categoryId: 'ppf_transfer',
    content: `
# 8.13 Transfer out to bank (HINTTM / HCAAC)
PPF Bank Transfer and verification should be Done in Supervisor Logins only:
a) Invoke \`HINTTM\` menu from one supervisor login for zeroing of interest for the current financial year.
b) In \`HINTTM\`, PPF account number to be entered; From date should be \`01-04-YYYY\` (Current Year); Interest table code should be \`Zero\`.
c) Verification has to be done by other Supervisor.
d) Closure has to be invoked using \`HCAAC\` menu from Supervisor login. Option ‘Transfer’ has to be selected and transfer account id should be Postmaster account (\`0340\`).
e) Closure reason should be selected as ‘Transfer to Bank’.
f) Closure has to be verified by other Supervisor.

# 8.14 Transfer in from bank (CPPFAO / CTUPLD / CTPROC)
a) Create CIF ID if already not available.
b) Use \`CPPFAO\` menu in PA login to open a new PPF account. Select the CIF ID and select the option **TRANSFER** and enter the old account number.
c) Also enter the correct account open date and enter the maturity date (\`31-03-YYYY\`).
d) Verify the account opening using \`CPPFAV\` menu in Supervisor login. Note down the account number.
e) Before creating the text file, the date format of the system should be changed as \`mm/dd/yyyy\`.
f) The text file has to be generated from the excel sheet. Excel sheet should contain all the transactions of the PPF account and the balance should be checked.
g) The field 'Financial Year End Balance Identifier' should be selected as \`YES\` only for the last transaction of a financial year. For all other transactions, it should be selected as \`NO\`.
h) The fields 'Transaction Date' / 'Value Date' should be in \`mm/dd/yyyy\` format only.
i) Enter the account number created in Finacle and click on Generate File button to generate the text file. Excel template is attached with this mail.
j) In Counter PA login, select \`HTRFTOUN\` menu. Select the text file generated. In 'Destination Directory' field, enter \`/dop\`
k) The message 'File uploaded successfully' will be displayed.
l) Then, select \`CTUPLD\` menu. Enter the account number and then enter the file name (enter as it is available). The message 'Data uploaded successfully' will be displayed.
m) After this process, login as Supervisor and select \`CTPROC\` menu. Select 'Verify' and enter the account number. Transactions will be displayed. Click on **SUBMIT**.
n) Again login as PA and select \`CTPROC\` menu. Select 'Process' and enter the account number. Transactions will be displayed. Click on **SUBMIT**. A screen showing the transaction id details will be displayed.
o) Then, check the current year transactions in \`HACLI\` menu and previous year transactions in \`CTINQ\` menu.
`
  },
  {
    id: 'nsc_kvp_general_info',
    sectionNumber: 'General Rules',
    title: 'About KVP',
    categoryId: 'nsc_kvp_general',
    content: `
# 9.1.2 About Kisan Vikas Patra (KVP)
* Amount Invested doubles in **110 months** (9 years & 2 months)
* Minimum deposit Rs 1000/- and multiple of Rs 1000/- and no maximum limit.
* Account can be opened by an adult for himself or on behalf of a minor or by two adults.
* KVP account can be opened from any Departmental Post office.
* Facility of nomination is available.
* Certificate can be transferred from one person to another and from one post office to another.
* Certificate can be encashed after **2 & 1/2 years** from the date of issue.
`
  },
  {
    id: 'nsc_kvp_account_opening',
    sectionNumber: 'Opening',
    title: 'NSC/KVP Account Opening',
    categoryId: 'nsc_kvp_opening',
    content: `
# 9.2 NSC/KVP Account Opening
While opening NSC/KVP account the transactions will be in **Entered stage** and agent commission will be in **Posted stage**. If any mistake done regarding agent contact CPC. Do not try to rectify it yourself.

**Before doing NSC/KVP transactions ensure that:**
a. If mode of payment is **Transfer from SB Account**, Check **Required Fund is available in the SB account** using the Menu \`HACLI\`/\`HACCBAL\`.
b. If mode of payment is **Non DOP Cheque**, Check the **Cheque is realized** and **Office Account SOL0382 is credited properly** using the Menu \`HACLINQ\`.

**Creation Steps (CMISAOP):**
1. **Menu:** \`CMISAOP\` – Click Go
2. Enter the **CIF ID**
3. Select Product Group \`KVN/NSC8\`
4. Click the Searcher against Scheme Code field.
5. Select the Scheme code (\`KVP16\`/\`NSC16\`) from Searcher List as applicable.
6. Click **Go**. A new window with all the data of the customers as per the CIF id will get populated.
7. Select **The Mode of operation** – Use searcher to select \`012/016/017\` etc.
   * *If the account is opened by cheque, enter the cheque encashment date in the Value date field.*
8. Enter **Deposit Amount**. Amount will be as per rule. Maturity date will be shown.
9. If any Agent attached, Click **Agent option**.
10. Click **Agent ID Searcher**. Enter few characters in DSA name field and Submit. Agent ID List will come. Select the Agent ID.
11. **Nomination:** Same as explained in case of SB Account opening.
12. Enter **Party details 2,3 etc** If the mode of operation is 016/017 (joint account).
13. **Transaction Required** – Select **Yes** Radio button.
14. **Transaction type:** Select **Cash** or **Transfer** option.
    - *In case of fund transfer from SB A/c, Select Transfer & enter Debit A/c ID as SB A/c ID of customer.*
    - *In case of A/c open by Non DOP Cheque, Select Transfer & enter Debit A/c ID as \`SOL0382\` office account here.*
    - *In case of A/c open by DOP cheque, Select Transfer & Enter SB Account no. of the cheque, enter Cheque number in Instrument alpha/Sl no. and cheque date in Instrument date field.*
15. **Documents Received:** Yes
16. **Number of documents received:** Enter \`1\` (as only AOF has been submitted by customer)
17. Select document code as \`016\` from Searcher.
18. Enter **Document Date** (Press Ctrl+X for current date).
19. **Scan Details:** Select Scan not required.
20. **Documents Status:** Document Submitted/Sent to CPC.
21. Click **Submit**. A message will come "Please check the Risk Category of the customer for KYC purpose".
22. Click **OK**. Flow page will be shown.
23. See the details and Click **Submit**. KVP/NSC A/c ID & Txn ID will be generated, Note down the Numbers on AOF.
`
  },
  {
    id: 'nsc_kvp_account_closure',
    sectionNumber: 'Closure',
    title: 'Account Closing (Bulk & Individual)',
    categoryId: 'nsc_kvp_closure',
    content: `
# 9.7 About NSC/KVP Account closing
* NSC/KVP may be closed in bulk or it may be closed individually one certificate at a time. In case of bulk closer there are certain criteria.
* Trail closer is done in case of Premature and matured certificate or in case of death claim.
* No separate Trial closer function available. TD/MIS closer menu \`HCAACTD\` may be used to trail close a certificate. But Trial closer of each certificate has to be done individually.

# 9.8 NSC/KVP Account closing [Bulk] (CNSBCV)
To discharge all certificates issued under **one registration no.** on the **same day**.
* Only matured certificate can be discharged. Premature closer is not possible.
* Death claim is also not possible using this menu.
* **50 certificates** can be discharged at a time under one registration. If there are more than 50 certificates under one Registration, this menu has to be run more than one time.
* **Mode of payment is only transfer**. Cash payment is not possible by bulk closure option. Customer must have a SB account to transfer the maturity value. If the customer doesn’t have an SB account, matured value has to be transfer to Post Masters Cheque account (\`SOL0340\`) to issue cheque.
* **Before proceeding**, CIF ID of the Certificates are to be noted from the Sanchaya post – Finacle mapping pdf file or using \`CNAC\` menu (if the certificates were issued before migration).
* Check thoroughly all the certificates under the registration number are presented by the customer.
* Bulk closer should not be used, when the link is poor. It may fail or certificates may be partially closed.

**Steps:**
1. **Menu:** \`CNSBCV\` - Click Go
2. **Function:** Z-Close
3. Select Product type **NSC/KVP**
4. Enter **CIF ID**
5. Click the searcher next to Registration No. and select the Reg no. from list.
6. Enter the customer's **SB A/c no.** or **Postmaster cheque account no. (SOL0340)** as the case may be.
7. **Submit**
8. Menu \`HPR\` has to be invoked to see NSC/KVP bulk closer Success or failure report (after few minutes).
9. Supervisor to verify the same using same menu \`CNSBCV\`.

**Note:** While doing the bulk closer if some certificate under the registration is not closed – use individual closer Menu \`CSCCAAC\` to close those certificates and verify them using the same menu.

# 9.9 NSC/KVP Account Closing [Individually - one at a time] (CSCCAAC)
1. **Menu:** \`CSCCAAC\` – Click Go
2. **Function:** Z-Close
3. **Product Type:** Select NSC/KVP
4. Enter **CIF ID** of the NSC/KVP to be discharged.
5. Click on **Searcher** button near Registration no. All the Registration numbers, Account ID, SOL ID, Certificate number of the certificates under the CIF will show.
6. Click the Registration number against the Certificate No. to be closed.
7. In case of Death claim change the Closer Value date to **Date of Death**.
8. Click **Go**. A new window comes.
9. Click **Close Check Box**.
10. **Repayment mode:** Select Cash or Transfer
11. If Transfer is selected enter **Repayment A/c ID** as SB A/c of Customer if customer wants to transfer maturity value to his/her SB Account. 
    *If customer wants cheque, enter Repayment A/c ID as Post Masters Cheque Account (\`SOL0340\`) and issue cheque.*
12. Enter **Closer reason code** or Select From:
    - (In case of Maturity: Select Normal Closer - \`NORML\`)
    - (In case of Death: Select Death claim – \`DTCLM\`)
    - (In case of forfeiture : Select \`FORFT\`)
13. Click **Submit**.
14. A message will come "Please confirm this is a actual closer and not a trial closer". Click **Yes** to complete the transaction.

## 9.10 NSC/KVP Account Closing Verification
1. **Menu:** \`CSCCAAC\` – Click Go
2. **Function:** V-Verify
3. Enter CIF ID of the closed certificate.
4. Click on the searcher next to Registration Number and select the record by clicking on the registration number.
5. Click **Go**.
6. Click Close Check Box.
7. Click **Submit**.
8. A message will come "Please confirm this is a actual closer and not a trial closer" -> Click **Yes**.

**Cash payment (below rs. 20,000/-) of NSC/KVP involves two more steps:**
1. **Payment by PA:** Menu: \`HCASHPND\` -> Function Process -> A/c ID: Enter NSC/KVP A/c No. -> Click Go -> Click on Srl No. 00001/00002 etc. -> Click Post, an exception may come. Click on Accept. Transaction ID to be noted.
2. **Verification By SUPER:** Menu: \`HTM\` -> Function Verify -> Enter Transaction ID -> Click Go -> Check and Submit.
`
  },
  {
    id: 'nsc_kvp_duplicate',
    sectionNumber: 'Duplicate',
    title: 'Duplicate Certificate Print',
    categoryId: 'nsc_kvp_misc',
    content: `
# 9.11 Duplicate Certificate Print
Menu for duplicate certificate is only available for Postmaster of HPO. Duplicate certificate printing can be done by Postmaster by taking proper certificate stock. Before printing duplicate certificate correctness of the certificate allotment can be checked using \`CSCAM\` menu and by selecting Inquire function.

Certificate holder can apply for issue of duplicate certificates only at the CBS post office from where, certificates were issued. Process of issue of duplicate certificates should be started and completed by that CBS Post Office only.

**Procedure:**
1. Move the inventory of Duplicate Certificates (if available) of same scheme to the Postmaster of HO’s User id from which duplicate certificate is getting printed (From ZZ/EXT to DL/DL and from DL/DL to Postmasters ID). Otherwise, fresh certificates will be taken from the existing inventory.
2. Use the menu \`HDUDRP\` and provide details like account number /cif id for which certificate is getting printed.
3. \`HDUDRP\` will take the current inventory i.e either normal or duplicate certificates which is available with the user.
4. If certificates are actually printed through printer, the user is able to see the word **"DUPLICATE"** on the certificates. If certificates are not printed then a Rubber Stamp of "Duplicate" should be placed on the certificates where normal certificates are used.
5. After this, new certificate number will be available under the account number. Use \`CSCAM\` menu and Function-Inquire to confirm that new certificate numbers are replaced with lost certificates.
6. If the any holder/customer come with old certificates, while closure, system will not those certificates in the closure menu.
7. Old certificate number will not be reflected in the system and user can’t be able to close the account.

**Steps to print (HDRP):**
1. **Menu:** \`HDRP\` – Click Go.
2. Enter Scheme code or select from searcher.
3. Enter CIF of the certificate
4. Enter From A/c ID and To A/c ID. In case of single A/c both From and To A/c ID are same.
5. Click **Go**. A new window comes.
6. All the entries for a particular scheme will be selected and will be shown. Click **Accept**.
7. First entry will show certificate no. taking from duplicate stock. Click **Submit**.
8. & 9. Click **Print**. The word "Duplicate" can be seen.
10. Click **Proceed**.
11. Next certificate no. will be shown also if any. Click print and proceed until all the certificates are printed. At end Click **Ok**.
`
  },
  {
    id: 'menus_list_all',
    sectionNumber: 'Menus',
    title: 'Module-Wise Menu List',
    categoryId: 'menus_list',
    content: `
# 11.1 Module-Wise Menu List used across India Post offices

Here is the breakdown organized by primary modules and schemes:

## 1. CIF (Customer Information File) Management
* **CDEDUP**: Check for existing duplicate customer profiles.
* **CCRC / CIFCR**: Create a new customer CIF ID (and Supervisor verification).
* **CMRC / CIFMD**: Modify or suspend an existing CIF ID.
* **HCCA**: Merge duplicate CIF IDs.
* **HCRV / HCRB**: Inquiry of CIF details (Customer Relationship View).
* **CICD**: Check comprehensive details linked to a CIF.
* **CCIFINQ**: Search CIF IDs linked via Aadhaar or Mobile Number.

## 2. Post Office Savings Account (SB)
* **CASBAO / QDESA**: Open a new Savings Account.
* **CASBAV / QDESAVF**: Verify the newly opened Savings Account.
* **CASBAOM / QDEMSABV**: Modify account details before verification.
* **CASBAM / QDEMSA**: Modify account details after verification.
* **CTM**: Post cash transactions (Deposits / Withdrawals).
* **CXFER**: Process transfer transactions.
* **HPBP**: Print the customer Passbook.
* **HCAAC**: Close a savings account (and verify the closure).
* **CNAC**: Find a new 10-digit CBS account number using the old solid code account number.
* **HCBM**: Change customer status from Minor to Major.

## 3. Recurring Deposit (RD)
* **CRDOAAC / RDAOCM**: Open an RD account.
* **CRDOAACV / RDAOVF**: Verify the opening of an RD account.
* **CRDOAACM / RDMAO**: Modify account details before verification.
* **RDAMT / CRDP**: Maintain RD account transactions/deposits.
* **CRDCAAC / RDACLM**: Close an RD account (and verify closure).
* **HPLIST**: View the pending installment list for an RD account.

## 4. Time Deposit (TD) & Monthly Income Scheme (MIS)
* **CMISAO / MISAOP**: Open a TD or MIS account.
* **CMISAOPV / MISAVF**: Verify the TD/MIS account opening.
* **CMISAOPM / MISAMBV**: Modify details before verification.
* **TDRED / HTDREN**: Renew a Time Deposit (TD) account.
* **HCAACTD / TDACTCL**: Close or pre-close a TD/MIS account.
* **HCAACVTD / TDACTCLV**: Verify TD/MIS account closure.
* **HTM**: Pay monthly MIS interest by debiting the Sundry Deposit MIS account.

## 8. Senior Citizen Savings Scheme (SCSS)
* **CSCAOP / SCSSAO**: Open an SCSS account.
* **CSCAOPV / SCSSAV**: Verify an SCSS account.
* **CSCAOPM / SCSSMBV**: Modify SCSS details before verification.
* **CSCAM / SCSSMAV**: Modify SCSS details after verification.

## 6. Public Provident Fund (PPF)
* **CPPFAO / PPFAO**: Open a PPF account.
* **CPPFAV / PPFACVF**: Verify a PPF account opening.
* **CPDTM**: Handle funding and future deposits into a PPF account.
* **CPWTM**: Process part-withdrawal from a PPF account.
* **PPFAEXT / HCEXTN**: Extend the maturity period of a PPF account.
* **HAFSM**: Unfreeze a dormant or frozen account.

## 1. National Savings Certificate (NSC) & Kisan Vikas Patra (KVP)
* **CSCOAAC / NSCAO**: Open an NSC or KVP account.
* **CSCOAACV / NSCAOVF**: Verify an NSC/KVP account.
* **HDRP**: Print certificates/passbooks for NSC or KVP.

## 3. General Inquiries & Financial Monitoring
* **HFTI / HFTR**: Financial Transaction Inquiry and Report generation.
* **HTDTRAN**: Specific Term Deposit transaction inquiry.
* **HABI**: General Balance Inquiry.
* **HOCI**: Outward Cheques Inquiry.
* **HTDSREP**: Customer-wise TDS (Tax Deducted at Source) report.
`
  },
  {
    id: 'common_txn_12',
    sectionNumber: '12',
    title: '12. Common Transactions for All Schemes',
    categoryId: 'common_txn_main',
    content: `
# 12. Common Transactions for All Schemes

## 12.1 Transfer of accounts from PO to PO

Kindly follow the following steps while transferring the accounts from one SOL to other SOL in India Post Finacle.

1. Invoke **CNAC** menu to find the New A/C Number from Old A/C Number.
2. The Format is SOLID+SCHEME+OLD NUMBER Ex:-50000300MIS123456
3. This will give you the New A/C Number and CIF ID.
4. Note them.
5. Scheme Codes: MIS - MIS, SB - SB, TD - TD, SCSS - SCS, PPF - PPF, NSC - NSC, KVP - KVP, RD - RD
**Note:** For certificates, Enter the certificate number(prefix and suffix) instead of registration number.
6. Check the customer signature before transferring an account and take fresh KYC and SB-10(b).
7. Before doing the transfer kindly check the pending sundry amount and ECS status for the account.
8. If sundry amount is pending, first withdraw the amount if you forget then it will throw the error after transferring the account i.e.,"Inter SOL operations can only be inquired". For example if you transfer an account from Bangalore to Secunderabad, if you forget to withdraw the due sundry amount and you have transferred before withdrawing the account will be in Secunderabad SOL and due sundry amount will be Bangalore sundry account if you try in this case to withdraw the due sundry amount(which was in Bangalore sundry office account) then system will throw the said error. So make a practice to withdraw the due amount and then transfer the account.
9. If ECS is enabled for the account then the account modification will throw an error after transferring the account if ECS is not enabled to your office(Error will be "ECS branch setup is not there") So take precaution before transferring.
10. In case of PPF accounts with defaulted installments pending then the transfer will not affect the system will throw an error.

### A/C TRANSFER PROCEDURE:
1. Invoke **HACXFSOL** menu
2. Function - Transfer
3. Click on GO(F4)
4. Enter Source SOL ID (Click on searcher and enter the pincode of that office to know the sol id)
5. Enter Target SOL ID (Click on searcher and enter the pincode of that office to know the sol id)
6. Enter the A/C ID which is to be transferred
7. Click on SUBMIT(F10)
8. Note down the transaction id and verify the same in the same menu in supervisor login.

## 12.2 Claim Closure procedure

Generally if the investor/depositor of an account expires then the accounts associated with that investor/depositor can be claimed by the claimant (Nominee if available or Legal heir) which is known as Claim Closure.
We initially take all the supported documents and after proper verification of documents the concerned higher level official will sanction the claim closure.
Claim closures for any account should be done only after sanction by the sanctioning authority.
After sanctioning, claim closures can be done in any CBS office as per the SB order 08/2015 Scenario 5 and Scenario 6.

### Change the depositor status to Deceased at CIF Level
1. Before invoking the closure menu we have to make the customer status to Deceased and enter the date of death at CIF level using the menu **CMRC**.
2. In counter PA login invoke the menu **CMRC** and select the function as Modify.
3. Enter the CIF id and then click on Go(F4).
4. In the customer details enter the following detailed:
   a. Change the Customer status to "Deceased"
   b. Enter the filed Date of Death __________
5. Then click on Submit(F10) and verify in the same menu in supervisor login.

### Closure of the account using the reason code as Death claim
After modifying the customer status to Deceased then we have to proceed for the account closure.
Use the account closure menu for the respective scheme i.e.
1. For SB/PPF account -- Use the menu **HCAAC**.
2. For RD account-- Use the menu **CRDCAAC**.
3. For NSC/KVP certificates--- Use the menu **CSCCAAC**.
4. For MIS/TD/SCSS account--- Use the menu **HCAACTD**.

**For example** if we are closing the SB account then invoke the menu **HCAAC**.
Then enter the below details:
- Enter the field account ID __________
- Select the Transaction Type as "Transfer"
- Enter the Transaction A/c ID. "Postmaster A/c id" (SOLID+0340) because payment of claim closure should be through cheque only.
- Then click on Go(F4)
- Then click on Closure tab and in the closure reason column select the reason code as "DTCLM" (This is mandatory for claim closures as the system will calculate the interest based on the closure reason code).
- Then click on Submit(F10) and verify in the supervisor login.

**Note:**
1. After successful closure of account using the claim closure then make the CIF as Suspended by using the menu **CMRC** so that no one will open the accounts using the Deceased CIF.
2. Some of the users are changing the CIF status to Suspended CIF before closure of account which results in the error while closing the account hence make sure close the account and then change the CIF to suspended state.

## 12.3 CIF Creation
1. Invoke **CCRC** menu
2. Choose Function as ADD
3. Click on GO (F4)
4. Enter appropriate title by clicking the searcher.
5. Enter customer name in LAST NAME field only.
6. Enter FATHER/Husband name.
7. Choose TAX STATUS. If Pan card available enter pan no.
8. Enter Date of Birth.
9. Choose appropriate gender. Enter appropriate occupation type.
10. If creating minor cif enter guardian cif and relation.
11. Enter document details by choosing document type, document code from searcher and document unique id. Select preferred primary flag as YES.
12. Click on expand on the right of your screen and you can add four more document details.
13. Repeat step 11 if you have taken more than one document from customer. (Document type can be ID proof and address proof only.)
14. Enter Address details 1 by filling up address line1, address line 2 and enter pincode all other fields will fill up automatically.
15. You can enter more address details by clicking expand on right of screen.
16. Choose phone type and enter phone number.
17. Choose email type and enter email id.
18. Enter appropriate "Tax deducted at source table code".( Mostly it will be NOTAX)
19. Enter Relationship manager id as CIFRM.
20. Enter Short name.
21. Choose appropriate tax category.
22. Click on Submit (F10).
23. Note down the CIF and verify the same in supervisor login using same menu.
**Note:** In some cases system will throw an error to select preferred primary flag. Then beside document details, select preferred primary flag as YES.

## 12.4 CIF modification
1. Invoke **CMRC** menu
2. Function Modify
3. Enter Cif id you want to modify
4. Click on GO (F4)
5. Make the necessary correction you want make.
6. Click on SUBMIT (F10)
7. Verify the cif id in the same menu in supervisor login.

## 12.5 Change of Address of Customer
1. Invoke **CMRC** menu
2. Function Modify
3. Enter Cif id you want to modify
4. Click on GO (F4)
5. Change the address in Address Details 1.
6. Click on SUBMIT (F10)
7. Verify the cif id in the same menu in supervisor login.

## 12.6 Adding PAN card Details of Customer
1. Invoke **CMRC** menu
2. Function Modify
3. Enter Cif id you want to modify
4. Click on GO (F4)
5. Choose Tax Status as Pan Card available and enter PAN No.
6. Click on SUBMIT (F10)
7. Verify the cif id in the same menu in supervisor login.

## 12.7 Adding Phone number, Email ID of Customer
1. Invoke **CMRC** menu
2. Function Modify
3. Enter Cif id you want to modify
4. Click on GO (F4)
5. Choose phone type as Landline or Mobile and enter the phone no. Choose appropriate email type and enter email id.
6. Click on SUBMIT (F10)
7. Verify the cif id in the same menu in supervisor login.

## 12.8 Opening of Minor Account operated by Self
In India post finacle, Date of Birth is mandatory Field. If Age is less than 18 years, The Account is treated as Minor and Guardian CIF becomes necessary in Account opening. According to POSB rules A child, age of 10 years can open the Account self.
1. There is no need to fill the Guardian Detail in AOF.
2. Signature and Photo of Minor should be pasted in AOF.
3. First Create Minor CIF and write this CIF ID in AOF as Depositor CIF.
4. In Guardian Detail, Please use unique Guardian CIF **300668762**.
5. The mode of operation should be ''self''.
6. CPC will use the Minor CIF ID in Datacap.

**Note:** The Unique Guardian CIF ID Shows following Details:
a) Last Name/Short Name - GUARDIAN
b) DOB - 01/07/1960
c) Document Type - ADPRF with unique ID 3 Dec 2014 email.
d) Document Code - PSBID
e) Nationality - Indian
f) Tax Deduction At Source – NOTAX

## 12.9 Taking Cash from Vault
Vault in Finacle is same as treasury in our DOP. As we take cash from treasury, same is taking cash from vault in the morning before opening the counter.
In vault operations Debit means "comes in" and Credit means "goes out".
Please follow the below steps while taking the cash from Vault:
1. Invoke **HTM** menu
2. Function - ADD
3. Transaction Type\\Sub Type - Cash\\Cash transfer
4. Click on GO(F4)
5. Then select Part transaction type as "Debit" , give the teller account id and enter the amount and then click "ADD"
6. Then after clicking ADD button in the second record enter the Vault account ID(SOLID+0406) and then click on "3=3" button beside the amount option.
7. After clicking 3=3 button the system automatically fills the amount and Part Transaction Type as credit.
8. Click on POST.
9. Note down the Transaction ID and verify the same in the same menu in supervisor login.

## 12.10 Giving Cash to Vault
Vault in Finacle is same as treasury in our DOP. As we give cash to treasury, same is giving cash to vault in the evening after closing the counter.
In vault operations Debit means "comes in" and Credit means "goes out".
Please follow the below steps while giving the cash to Vault:
1. Invoke **HTM** menu
2. Function - ADD
3. Transaction Type\\Sub Type - Cash\\Cash transfer
4. Click on GO (F4)
5. Then select Part transaction type as "Debit", give the vault account id(SOLID+0406) and enter the amount and then click "ADD".
6. Then after clicking ADD button in the second record enter the teller account ID and then click on "3=3" button beside the amount option.
7. After clicking 3=3 button the system automatically fills the amount and Part Transaction Type as credit.
8. Click on POST.
9. Note down the Transaction ID and verify the same in the same menu in supervisor login.

## 12.11 Checking Teller Cash Position
1. Invoke **HACLINQ** menu
2. Enter TELLER ID/OFFICE ACCOUNT ID
3. Click on GO (F4)
4. System will display the Ledger Details of the Entered Account.
**Note:** You can also use **HTCPIAE** to view teller cash position. Choose your employee id by clicking the searcher and click submit.

## 12.12 Post Counter Operations – To view unverified Transactions
1. Invoke **HFTI** and select the transaction status as “Entered” then click on GO (F4)
2. Then it should display as "No records fetched". If it shows some pending transactions, note down the transaction id and verify them.
3. Invoke **HFTI** and select the transaction status as "posted" then click on GO (F4)
4. Then it should display as "No records fetched". If it shows some pending transactions, note down the transaction id and verify them.

## 12.13 Report Generation and printing.
1. Invoke **HFINRPT** menu
2. Select the Required Report
3. Enter Necessary Parameters
4. Click on SUBMIT (F10)
5. System will display the message 'Report Generated Successfully View HPR in 10 Mins'.
6. Generate all the required reports by above procedure.
7. Invoke **HPR** menu
8. Click on GO (F4)
9. Select the Reports and Click on Print Screen.
10. Save or Print the Reports.

## 12.14 Passbook Printing
1. Invoke **HPBP** menu
2. Enter A/C ID
3. Check the Name and Click on Print
4. Select Appropriate Printer and Click on Print
5. Select YES if the passbook printed correctly
6. Select NO if there is any mistake and repeat the process for the same account number.
**Note:** 
1. For New Passbook, First time, it will print the cover page and then we have to enter the account number again and click on Print to get the Transactions page.
2. For DPB and FPB, Enter the A/C ID and Click on Modify. Select New Passbook, Click on Print, then cover page will be printed. Enter the A/C ID again and click on Print to get the Transactions page.

## 12.15 Printing of Passbook which was already printed
HPBPR means passbook print reset
1. Invoke **HPBPR** menu
2. Function - RESET
3. Enter A/C ID
4. Enter From Date and To Date (For which the passbook has to be printed)
5. Click on Accept
6. Select the transactions and click on SUBMIT (F10)
7. Verify the same in the same menu in supervisor login.
8. Then Invoke **HPBP** menu
9. Enter the A/C ID
10. Click on Print
11. Select Appropriate printer and again click on print.
12. Click on YES if the passbook was printed correctly. Otherwise, Click on NO to re-print.

## 12.16 BO Transactions
Process (provisional) of Accounts standing or opened at BOs after Account Office Migrated to CBS.

### Account Opening (Savings/RD/TD)
Account opening form received at BO and sent to SO / HO.
**At BO:**
Cash and form collected at BO. New Account Opening form is only to be used. Signature and Photo should be taken/pasted only on the English side of the form. Photo should be of the size of the place available in the form and should not extend outside the printed portion. PR No. should be noted on the top of the Form.
**At SO/HO:**
Open the account in Finacle and fund the account by debiting BO settlement account i.e SOLID+0339 (in future separate settlement account will be opened for each BO and each scheme which will be intimated on the day of migration).. Savings account cannot be funded while opening and has to be funded after opening of account subsequently. RD and TD Accounts have to be funded while opening by using the BO settlement account for debit. Value date should be given as BO date on which Preliminary Receipt(PR) was issued. Also attach the relevant BO code in account opening screen.
* Index to PR is to be maintained manually in a register.
* This account opening will reflect in the day’s LOT.

### Subsequent Deposit/Withdrawal In SB
**Withdrawal by customers at BO up to Rs.5000/-**
**At BO:** For withdrawals up to Rs.5000/-, BPM has to first note new account number and CIF ID on the Passbook and BOSB/RD Journal as well as SS Book. Tally signatures on SB-7 with SS Book and pay cash. Ensure that new account number is noted on the SB-7. Make entry in the Passbook and BO SB Journal as done during before migration to CBS. In BO Daily Account, mention new account number.
**At SO/HO:** Based on vouchers received which will have the new account number (if old number is written, Counter PA has to see the new number and note on the SB-7) - execute the menu **CXFER** . Debit the customer account and credit the branch office settlement office account i.e SOLID+0339 (in future separate settlement account will be opened for each BO and each scheme which will be intimated on the day of migration) and value date should be given as BO Date. Enter the name of the BO in Transfer particulars field removing the word “BY TRANSFER”.

**Withdrawal by customers at BO exceeding Rs.5000/-**
**At BO:** For withdrawals up to Rs.5000/-, BPM has to first note new account number and CIF ID on the Passbook(first time) and BOSB Journal as well as SS Book. Tally signatures on SB-7 with SS Book and issue SB-28. Send Passbook and SB-7 to Account Office for sanction. On receipt of sanction, repeat the above procedure.
**At SO/HO:** On receipt of Passbook and SB-7 from BO, Signatures and balance in the account should be matched in Finacle under Account Inquiry menu (**HACLI**). Issue sanction on SB-7, and send to BO. Based on vouchers received after withdrawal, same procedure as mentioned above should be followed. SB-45 register to be maintained manually.

**Subsequent deposit in SB by customers at BO**
**At BO:** For subsequent deposits, BPM has to first note new account number and CIF ID on the Passbook (first time) and BOSB Journal as well as SS Book. Collect cash and Pay-in-Slip. Ensure that new account number is noted on the Pay-in-Slip. Make entry in the Passbook and BO SB Journal as done before migration to CBS. In BO Daily Account, mention new account number.
**At SO / HO:** Based on vouchers received which will have the new account number (if old number is written, Counter PA has to see the new number and note on the Pay-in-Slip) - execute the menu **CXFER**. Credit the customer account and debit the branch office settlement office account i.e SOLID+0339 (in future separate settlement account will be opened for each BO and each scheme which will be intimated on the day of migration) and value date should be given as BO Date.

**Subsequent deposit in RD by customers at BO**
**At BO:** For subsequent deposits, BPM has to first note new account number and CIF ID on the Passbook and BOSB Journal as well as SS Book. Collect cash and Pay-in-Slip. Ensure that new account number is noted on the Pay-in-Slip. Make entry in the Passbook and BO RD Journal as done before migration to CBS. In BO Daily Account, mention new account number.
**At SO / HO:** Based on vouchers received which will have the new account number (if old number is written, Counter PA has to see the new number and not on the Pay-in-Slip) - execute the menu **CRDP** and credit the customer account and debit the branch office settlement office account i.e SOLID+0339 and value date should be given as BO Date.

### Account Closure Of SB/RD/TD
**Account closure form presented At BO**
**At BO:** Accept the account closure form, Tally signatures with SS Book. Enter new Account number on all the relevant record and on SB-7A as well as passbook. Issue SB-28 and send SB-7A and Passbook to Account Office. On receipt of sanction, follow the same procedure as mentioned for withdrawals above Rs.5000/-. Ensure that if month change happens in between date of sanction by AO and date of payment, fresh sanction should be obtained from AO.
**At SO / HO:** On receipt of Passbook and SB-7A, tally signatures and balance of the account by invoking Account Inquiry menu (**HACLI**). Execute Menu **HACACCR** (Interest accrual menu for SBA) for the SB Account and prepare sanction on SB-7A based on the closing interest shown in the report. On receipt of SB-7A duly paid from the BO, do the normal closure of Savings Account in Finacle and select BO Settlement Account as credit account (value date should be date of account closure at BO). If BPM returns the earlier sanction due to change of month, fresh sanction should be issued by repeating the earlier process. In case of RD and TD, trial closure should be invoked and based on the report of Trial closure, sanction should be sent to BO.
On receipt of paid voucher from BO, invoke the menu **CRDCAAC** for RD closure and **HCAACTD** for TD closure. Value date should be BO date. Closure proceeds to be transferred to BO settlement account SOLID+0339 (in future separate settlement account will be opened for each BO and each scheme which will be intimated on the day of migration).

**Note:**
1. BO code needs to be linked at the time of account opening (BO Code will be available in account opening screen in search option).
2. All transactions received from BOs duly entered in BO Daily Account should be mandatorily done via the office account earmarked for the BO i.e 0339.
3. If any transactions of account opened at BO is done at Account Office, it will reflect as a transaction of the SO/HO in LOT. In such a case, transaction should be just like transaction done for the account standing at Account Office. No such transaction should be done without entry in the Passbook.
4. No MPKBY RD list will be accepted at any BO whose Account Office is migrated to CBS.
5. Savings Certificates will not be issued/discharged by any BO independently.

All BO transactions should be done only after initiating the Day End process by invoking **HISCOD**.

### BO Transactions in Detail: At SO/HO
**SB Deposit**
1. Invoke **CXFER** menu
2. Function - ADD
3. Transaction Type/Sub Type - Bank Induced
4. Click on GO (F4)
5. Enter Dr A/C ID as your SOL Id+ 0339
6. Enter Cr A/C ID as SB account no
7. Enter the Amount
9. Enter the BO name in Transaction Particulars field. (Delete ‘BY TRANSFER’ and enter BO name)
10. Enter Value Date as BO Date.
11. Click on POST
12. Note down the transaction id and verify the same in the same menu in supervisor login.

**SB Withdrawal**
1. Invoke **CXFER** menu
2. Function - ADD
3. Transaction Type/Sub Type - Bank Induced
4. Click on GO (F4)
5. Enter Dr A/C ID as SB account no
6. Enter Cr A/C ID as your SOL Id+ 0339
7. Enter the Amount
9. Enter the BO name in Transaction Particulars field. (Delete ‘BY TRANSFER’ and enter BO name)
10. Enter Value Date as BO Date.
11. Click on POST
12. Note down the transaction id and verify the same in the same menu in supervisor login.

**SB Account Opening**
1. Follow the steps in Section 1.3 of this book. After Step 6, choose Branch Office (Just click the searcher beside Branch office field and choose the BO).
2. Continue the next steps and open the account.
3. For initial Deposit, follow the steps in SB deposit section above.

**SB Closure**
1. Invoke **HCAAC** menu
2. Function - Close
3. Enter the A/C number
4. Select the transaction type as Transfer and Enter Transfer A/c Id as your SOL id + 0340
5. Click on GO (F4)
6. Go through A/C information and Closure tabs
7. Enter the appropriate closure reason code in Closure tab
8. Click on SUBMIT (F10)
9. Verify the closure in supervisor login using the same menu
10. Invoke **CXFER** menu
11. Function – ADD, Transaction Type/Sub Type - Bank Induced
12. Click on GO (F4)
13. Enter Dr A/C ID as your SOL Id+ 0340
14. Enter Cr A/C ID as a) your SOL Id+ 0339
15. Enter the Amount (SB Closure maturity value)
16. Enter the BO name in Transaction Particulars field. (Delete ‘BY TRANSFER’ and enter BO name)
17. Enter Value Date as BO Date.
18. Click on POST
19. Note down the transaction id and verify the same in the same menu in supervisor login.
**Note:** We should not recommend closing SB accounts as there are so many errors while closing SB accounts. Convince the customer to just maintain the account with minimum balance and keep the account alive.

**RD Deposit**
1. Invoke **CRDP** menu
2. Function -Add
3. Transaction type – Transfer/Bank Induced.
4. Click on GO (F4)
5. Enter RD A/c number
6. Enter the Amount and Note down the default if any
7. Enter the value date as BO date
8. Scroll down and Choose mode of Payment as Transfer
9. Enter Account Id as your Sol Id+0339
10. Enter Transfer amount
11. Click on SUBMIT (F10)
12. Note down the transaction id and post the same in the same menu in supervisor login.

**RD Account Opening**
1. Follow the steps in Section 2.2 of this book. After Step 5 choose Branch Office (Just click the searcher beside Branch office field and choose the BO).
2. Follow the remaining steps and Open the account and verify the same in supervisor login.

**RD Closure**
1. Invoke **CRDCAAC** menu
2. Function - Close
3. Enter A/C ID
4. View the signature using F9
5. Click on GO (F4)
6. Select the box nearer to Close
7. Enter appropriate closure reason code
8. Select Repayment Mode as Transfer
9. Enter the Repayment A/C as your SOL id+0340 for transfer
10. Click on SUBMIT (F10)
11. Verify the closure in supervisor login using **CRDCAACV** menu
12. Invoke **CXFER** menu
13. Function – ADD, Transaction Type/Sub Type - Bank Induced
14. Click on GO (F4)
15. Enter Dr A/C ID as your SOL Id+ 0340
16. Enter Cr A/C ID as a) your SOL Id+ 0339 for cash closures and giving RBI cheque b) Customer SB A/c no if transferring to SB.
7. Enter the Amount (RD Closure maturity value)
9. Enter the BO name in Transaction Particulars field. (Delete ‘BY TRANSFER’ and enter BO name)
10. Enter Value Date as BO Date.
11. Click on POST
12. Note down the transaction id and verify the same in the same menu in supervisor login.

**TD Account Opening**
1. Follow the steps in Section 3.1 of this book. After Step 15 scroll down to the sub heading “MIS CODE”. There you will find Branch Office field. Choose Branch Office (Just click the searcher beside Branch office field and choose the BO).
2. Follow the remaining steps and open the account and verify the account using **CMISAOPV**.

**TD Account Closure**
1. Make sure that the overdue interest is paid upto date
2. Invoke **HCAACTD** menu
3. Function - Close
4. Enter TD A/C ID
5. View signature (F9)
6. Click on GO (F4)
7. View Account information Tab
8. View Closure Details
9. Select Close mode as a) Repayment account for Cash closures and Closure by giving RBI cheque b) SB account for transferring closure maturity value to customer SB account.
10. Repayment account ID is automatically SOLID+0340 account only.
11. For SB A/C Transfer, Select SB Account and Enter SB A/C ID, Enter Cash CCY Code as INR.
12. View Closure Exceptions
13. Select Appropriate Closure Reason Code
14. Click on SUBMIT (F10)
15. Verify the transaction in supervisor login using **HCAACVTD** menu
16. For closure by RBI and cheque and cash do the following steps also.
17. Invoke **CXFER** menu
18. Function – ADD, Transaction Type/Sub Type - Bank Induced
19. Click on GO (F4)
20. Enter Dr A/C ID as your SOL Id+ 0340
21. Enter Cr A/C ID as a) your SOL Id+ 0339 for cash closures and giving RBI cheque b) Customer SB A/c no if transferring to SB.
22. Enter the Amount (RD Closure maturity value)
23. Enter the BO name in Transaction Particulars field. (Delete ‘BY TRANSFER’ and enter BO name)
24. Enter Value Date as BO Date.
25. Click on POST
26. Note down the transaction id and verify the same in the same menu in supervisor login.

## 12.17 Checking EOD Blocking Validation
1. Invoke **HFINRPT**
2. Go to Page 3
3. Generate the report “EOD BLOCKING VALIDATION” report
4. There should not be any blockings. If there are any, check HFTI, HAFI, pending cheque book issue verifications, pending stock transfer transactions.

## 12.18 Perform Day End
In order to lessen the load on the server DOP changed the EOD execution in Finacle application. Previously first step of EOD process i.e., HSCOD should be executed by SOLs (offices) and then the remaining steps i.e., HSOLCOP and HSCOLD by CPC team of the Circle.
There is only small change instead of HSCOD now the Sol's should invoke **HISCOD** (a new menu only for EOD initialization which is available for SU/PM/SA roles in DOP Finacle).

The revised procedure in detail is as follows:
1. Submission of Pre EOD Menu - **HISCOD**: Branch User will be submitting after clearing the blocking validation.
2. Execution of EOD 1st Menu - **HSCOD**: CPC User will be executing with optimal parallelization as 20 once HISCOD is submitted for their SETs.
3. Execution of EOD 2nd Menu - **HSOLCOP**: Circle SPOCs will be executing for their SETs with optimal parallelization as 20 once HSCOD is completed for their SETs.
4. Execution of EOD 3rd Menu - **HSCOLD**: Circle SPOCs will be executing for their SETs with optimal parallelization as 20 once HSOLCOP is completed for their SETs.
During EOD execution, the overall EOD progress for the Circle to be monitored & co-ordinated by CPC team centrally.

**Submission of Pre EOD Menu by Branch User:**
Please find the procedure to be followed by Branch user for Submitting Pre EOD menu:
- Invoke **HISCOD** (Initiate SOL Change Operation Date) menu
- Provide the SOL ID under the field “SOL SET ID”, Hours as 0 & Minutes as 1
- Submit

**SOL Level Date Change Execution by CPC:**
Please find the procedure to be followed by CPC user for SOL Date Change Execution:
- Invoke **HSCOD** (SOL Change Operation Date) menu
- Provide the Circle SET ID under field “SOL SET ID”
- Provide Optimal Parallelization under field “No. of Parallel SOLs”
- Submit

CPC user can inquire lists of SOLs where HISCOD submitted for their Set through **HSSI** menu.
CPC user can inquire the HSCOD running status for their Set through HSSI menu.
The EOD Status of particular SET or for all SOLs can be monitored through HSSI menu.

## 12.19 Common Login Errors
Most of the times in Finacle, we face some login issues when we are working due to network failure or incorrect password entered by the user.
In Finacle the menus which starts with "C" stands for customized menus only for DOP where which starts with "H" stands for Hyperlink which is a common menu in Finacle.
Also for some menus in Finacle user restrictions are given in order to overcome the misuse for different kind of menus as per the recommendations given by the DOP at the time of agreement.
**CSAC** and **CRESET** are only customized and permitted to use only for System Administrators And Supervisors.

**Prerequisites for using these menus are:-**
1. Logout from the Finacle for the user who is facing login problem.
2. Delete the browsing the history by clicking on Tools------>Delete browsing history.
3. Clear browser cache. (Press F12 and then press CTRL+R).
4. Clear SSL State. (Tools menu in the menu bar of the browser -> Internet options -> Content -> Clear SSL State)

**CSAC:-**
This menu is used when any user is facing the problem "User already logged in" issue due to the following reasons:-
If the user closes the browser without clicking on logout i.e., improper closing of browser.
If any problem in the network or central server then the system will display the error while working.
Sometimes even session expired but improperly also leads to same problem.
In the above cases the user id need to SAC by the system administrator by invoking the menu **CSAC** then the system will ask to enter the user id and then submit.

**CRESET:-**
If the user enters the password wrongly for 3 consecutive times then the system throws an error "maximum attempts are reached user id is locked" then in this case invoke the menu **CRESET** from the system administrator login enter the user id and submit.
**Note:** There is one more case where user forgets the password, in this case both menus will not work we have to contact concern SPOC/CPC to reset the password for that corresponding user as mentioned earlier menus are restricted in Finacle not to misuse.

## 12.20 Opening Atal Pension Yojana Account
1. Invoke **CAPY** menu
2. Function - ADD
3. Enter Account ID - SB A/C ID
4. Click on GO (F4)
5. Enter PRAN number if the customer already had PRAN.
6. Enter/Alter Nomination Details According to the Requirement
7. Select Pension Amount in PM Scheme Details
8. Premium amount will be fetched automatically according to the selected pension amount
9. Select Frequency of Installment
10. Amount will be deducted automatically from customer's SB A/C on 1st of every month (For monthly contribution)
11. Click on SUBMIT (F10)
12. System will display Policy APY Enrolled Successfully for Account :300708XXXX. (For EX) Request no: SR201512080000XXXXX (For EX) Please Verify for transaction.
13. Verify the transaction in the same menu in supervisor login.
14. After verification in supervisor login, PRAN Number will be Generated.

## 12.21 Opening PMJJBY and PMSBY Accounts
1. Invoke **CPMY** menu
2. Function - ADD
3. Enter A/C ID (Savings A/C ID)
4. Select PM Yojana (Scheme) - PM Jeeven Jyoti Bima/PM Suraksha Bima
5. Click on GO (F4)
6. Add/Change the Nomination Details
7. Click on SUBMIT (F10)
8. Verify the transaction in the same menu in supervisor login.
9. After verification, Amount will be deducted from the entered savings account according to the selected scheme.
10. LOT will be generated in the name of Supervisor/System.

## 12.22 Inquiry by POSB Cheque number
If a Customer approaches Post Office Savings bank for withdrawal by POSB cheque or Presented the POSB cheque for any other account opening or presented at the Bank, In some cases, there will be no account number present on the cheque and if he also forgot to bring the passbook while withdraw, then there is a procedure to find the account number using the cheque number in india post finacle.
1. Invoke **HINQACHQ** menu in supervisor login.
2. Enter Cheque number
3. Enter SOL ID
4. Click on GO (F4)
5. System will display the Details of the customer having that cheque.

## 12.23 To Find Finacle Account Number from Sanchaya Account Number
For Every account number in sanchaya post, there is an equivalent 10 Digit Account number in Finacle. To find the new account number from the old account number, follow the below procedure.
1. Invoke **CNAC** menu
2. Enter the old account number in the following format
SOL ID + Scheme Code + Old Account Number (Ex: 50000300SB123456)
3. Click on SUBMIT (F10)
4. System will display the New 10 Digit Account number, CIF ID of the first depositor and his/her name.

Scheme codes for:
SB – SB, TD – TD, MIS – MIS, RD – RD, SCSS – SCS, PPF – PPF, NSS – NSS, SSA – SSA, NSC – NSC, KVP – KVP
For Certificates, enter the certificate number instead of Registration Number.

**Note:**
Don’t enter Zero (0) if it is present at the 1st position in the suffix of the certificate number.
Ex: If the KVP certificate number is 05GG 092128 then enter the following in CNAC menu
SOL ID + KVP + 05GG92128

## 12.24 To find SOL ID of Other Post Offices
There are many ways to find the SOL ID of the other POs in finacle. Some of them are given below.

**1st Way:**
1. Invoke **HFTI** menu
2. Delete the SOL ID in the SOL ID field and enter the pincode of the post office for which SOL ID has to be known.
3. Click on the searcher beside the SOL ID field.
4. System will display the SOL ID of that particular post office if it is migrated to finacle.

**2nd Way:**
1. Invoke **HAFI** menu
2. Delete the SOL ID in the SOL ID field and enter the pincode of the post office for which SOL ID has to be known.
3. Click on the searcher beside the SOL ID field.
4. System will display the SOL ID of that particular post office if it is migrated to finacle.

**3rd Way:**
1. Invoke **HFTR** menu
2. Delete the SOL ID in the SOL ID field and enter the pincode of the post office for which SOL ID has to be known.
3. Click on the searcher beside the SOL ID field.
4. System will display the SOL ID of that particular post office if it is migrated to finacle.

**4th Way:**
1. Invoke **HACXFSOL** menu
2. Function – Transfer
3. Click on GO (F4)
4. In the Target SOL ID field, enter the pincode of the post office for which SOL ID has to be known.
5. Click on the searcher beside the Target SOL ID field.
6. System will display the SOL ID of that particular post office if it is migrated to finacle.

In short, wherever you find the SOL ID field, you can delete your office SOL ID and can enter the pincode of the post office for which SOL ID has to be known and you have to click on the searcher beside that field to know the SOL ID of that particular post office.
`
  },
  {
    id: 'common_issues_13',
    sectionNumber: '13',
    title: '13. Common Issue and Solutions',
    categoryId: 'common_issues_main',
    content: `
# 13. Common Issue and Solutions

**\*\*\*MAKE ERROR ENTRY BEFORE DOING ANY OF THE FOLLOWING AND TAKE PERMISSION FROM HIGHER AUTHORITIES WHEREVER NECESSARY\*\*\***

## 13.1 Wrong Deposits and Withdrawals

Many times we come across situations where we erroneously make excess deposits or withdrawals. Like customer presents a deposit form for Rs.1000 and we make a deposit of Rs.10,000 by mistake or customer gives a withdrawal form for Rs.10000 and we withdraw only 1000. Since all deposits (except RD deposit) will be in posted state we cannot modify or delete such transactions. (In case of RD deposit the transaction will be in verified state after verification by supervisor.) Many such situations occur in our day to day counter activities. How to reverse such transactions? Below is the step by step procedure for reversal of such transactions.

**\*\*\*Make an error entry in the error book before doing this transaction.\*\*\***

1. Invoke the menu **HCRT**
2. Select Operation as REVERSE
3. Select function as REQUEST
4. Enter Transaction Id
5. Click on GO(F4)
6. Select the transaction to be reversed by clicking the checkbox to the left.
7. Click SUBMIT(F10)
8. Note down the Ref. no
9. Verify the Ref.no using the same menu.

**UNFORTUNATELY HCRT MENU IS NOT WORKING IN OPERATIVE POs. BUT THE PROCEDURE ABOVE IS CORRECT. WE REGRET FOR THIS UNFORTUNATE SITUATION.**
We request all the trade union leaders to take up this issue with the directorate and request them to allow us to use HCRT menu at operative POs. After all we are all humans and prone to make errors.

Fortunately our highly intelligent friends have come up with other alternatives of HCRT and we discuss them one by one below.

**Case 1: Excess/short deposit in SB**
Withdraw the wrong deposit amount using CTM and then make the deposit again for actual deposit amount. The wrong deposit amount and corresponding withdrawal amount will appear in LOT. Round off them and deduct those values from SB deposit total and SB withdrawal total.
Alternately You can obtain a withdrawal form from the customer for the excess deposited amount if the customer is still at the counter.

**Case 2: Excess/Short withdrawal in SB**
Deposit the wrong withdrawal amount using CTM and then make the withdrawal again for actual withdrawal amount. The wrong withdrawal amount and corresponding deposit amount will appear in LOT. Round off them and deduct those values from SB deposit total and SB withdrawal total.
Alternately you can obtain a Deposit and withdraw forms from the customer for the wrong withdrawn amount if the customer is still at the counter.

**Case 3: Excess deposit in RD**
As of now no solution is available for excess deposits in RD. We can use HCRT but to our great luck it’s not working. We can request the customer if possible.

For excess deposit in PPF see section 5.12 to know how to reverse the excess amount.
For excess deposit in SSA see section 13.14 to know how to reverse the excess amount.

## 13.2 Wrong Account Openings

**Case 1: Account opened with wrong CIF**
1. Invoke menu **HCCA**
2. Choose function as MODIFY
3. Enter account no
4. Click on GO (F4)
5. Enter the correct CIF by Deleting the existing CIF
6. Select Modify A/C Name as YES (**Mandatory**)
7. Choose appropriate Reason code
8. Click on SUBMIT (F10)
9. Verify account number using same menu in supervisor login.

**Case 2: Account opened with incorrect value date or incorrect denomination (in case of RD) or incorrect deposit amount (in case of TD/MIS/SCSS )**
If the account is not opened through agent the process is simple.
1. Invoke the verification in Supervisor login
2. Choose function as Cancel
3. Enter account id
4. Click on SUBMIT (F10)

If the account is opened through agent the process is a bit tedious. If we had HCRT available first we have to reverse the agent commission and the follow the above 4 steps. But since HCRT is not working let’s see how it is done.
1. First verify the wrongly opened account.
2. Invoke the menu **HACXFRSC**
3. Choose the function as Transfer
4. Click on GO (F4)
5. Enter the account ID
6. Choose target scheme code as exceptional account.
   * For RD account target scheme code as RECURRING DEPOSIT exceptional
   * For MIS/TD/SCSS account, target scheme code as MIS/TD/SCSS exceptional account
7. Click on SUBMIT (F10) and note down the instruction no.
8. Verify the instruction no using same menu in supervisor login.
9. Then close the account using appropriate menu and choose closure reason as Exceptional closure. (just follow the normal closure procedures)
10. Verify the closure using appropriate menus.

Open the account again with correct values.

**Alternately,**
After opening the account, before verification, note down the transaction id related to that account opening using **HFTI** menu.
1. Invoke **HFTI** menu
2. Enter the Entry user id (User id in which the account was opened)
3. Select transaction status as Entered.
4. System will display all the unverified transactions including Account openings.
5. Note down the Transaction id related to that particular account which was opened wrongly by finding the account number generated.
6. Delete that transaction id in PA login using **HTM** menu.
7. Verify the deleted transaction using the same menu in supervisor login.
8. Then the account will be opened with Zero balance
9. Close the account using Exceptional closure reason code by making an error entry.
10. Reverse the agent commission from the agents SB Account.
11. Then open the account again with correct values.

**Case 3: Wrongly opened certificates**
Since each certificate is treated as individual account in Finacle you can follow the same procedures as explained above but you have to follow the steps for each certificate.

**Case 4: Multiple account openings**
Many times we get “**System could not get response from server**” while doing transactions. If you get this error while opening new accounts, 99% the account will be opened. Don’t press SUBMIT button again and again when you get this error. The number of times you press the button, the number of times the account will be opened. So for Sachin tendulkar’s sake don’t press the submit button again and again when you get **System could not get response from server** error while opening new accounts or issuing new certificates. Use HFTI or HAFI menus to check if the account is opened or not. Only after you are absolutely sure that the account is not opened, you can open the account again.
If multiple accounts are opened, you can follow steps in Case 2 above and close the extra account openings. Make sure you deduct excess agent commission payment if any.

## 13.3 Problems in verification of Certificates Issue

For Issuing certificates through POSB cheque, we will enter the cheque number while issue without checking whether that cheque book has been issued to that particular SB account or not. In such cases system will allow the issue at counter PA login but it will say **Fish off** at supervisor login.

**Solution:**
For certificates issue, different account number will be allotted for each certificate even though they are having same registration number. Entered SB cheque number will be allotted to the very first certificate of a particular registration number. We can distinguish the first and last certificates by the account numbers as they are in ascending order. Before proceeding, verify all other transactions for clear view.
1. Invoke **HFTI** menu
2. Enter Entry user id of the counter PA
3. Select Transaction status as Entered
4. Click on GO (F4)
5. System will display the transaction IDs and A/C IDs which are not verified.
6. Note down the very first transaction ID, Its Debit A/C ID which is SB Account ID, Credit A/C ID which is the account ID allotted to the first certificate and the amount of transaction.
7. Delete the noted down transaction ID using **HTM** menu in counter PA login after confirming the presence of cheque number in HTM menu.
8. Verify the registration number in supervisor login.
9. Now we have to add the deleted transaction again using **HTM** menu
10. Invoke **HTM** menu
11. Function - Add
12. Transaction type/subtype – Customer Induced
13. Click on GO (F4)
14. Enter A/C ID - Customer’s SB A/C ID
15. Enter the amount
16. Click on ADD
17. Enter A/C ID – Certificate A/C ID which we have noted earlier.
18. Click on Contra-Adjustment button (3=3) beside the amount field.
19. Click on POST
20. Verify the Transaction ID in the same menu in supervisor login.
21. Continue for certificate printing using **HDRP** menu.

## 13.4 Certificates/Accounts migrated to Finacle with wrong Date of Issue/Date of opening or wrong deposit amount

Inform the matter to your divisional head along with appropriate documents showing correct date of opening/deposit amounts. Divisional heads should cross check the details with concerned SBCO incharge. Divisional head may give permission for manual closure after necessary enquiry. Then after obtaining permission from divisional head follow the procedure explained in **Case 2 of section 13.2** and close the accounts in finacle and transfer the closure proceeds to SOLID+0340. Then calculate the actual maturity values of the accounts and issue RBI cheques for correct maturity values.

## 13.5 Discharge of Certificates which are not migrated into finacle

Inform the matter to your divisional head along with appropriate documents showing correct date of opening/deposit amounts. Divisional heads should cross check the details with concerned SBCO incharge. Divisional head may give permission for manual closure after necessary enquiry. Then after obtaining permission from divisional calculate the actual maturity values of the accounts and issue RBI cheques for correct maturity values.

## 13.6 Problems in verification of SB Account closure

Before reading the following section, see all the notes in **section 1.5**
In some cases, System will allow the SB closure at counter PA login but it will show some error when we try to verify that closure in supervisor login even though there are no interest credit accounts linked to that SB A/C and also days after the closure of the accounts linked to the SB account.
In this case Current year interest will be generated for that SB account but the account closure verification shows some error.

**Solution:**
1. If the system shows an error while verifying the closed SB account, do the following procedure
2. Note Down the transaction id related to the SB closure using **HFTI** menu.
3. Modify that Transaction id and POST it using **HTM** menu
4. Verify the closure in supervisor login.
5. If the system still shows an error while verifying the Closure at supervisor login, Do the following procedure
6. Cancel the closure at supervisor login.
7. Do the Closure Again in PA login.
8. Verify the closure at supervisor end.

**Note:** If the SB Account is Silent account then, System shows an error while posting the transaction id as given in step 3 above. Then do the following procedure
9. Delete that Transaction id using **HTM** menu
10. Revive the SB Account using **CASBAM** menu
11. Close the Account.
12. If the system shows the error at verification then do the above stated procedure from step 2 to step 8 again.

## 13.7 SB Accounts migrated to Finacle with wrong Account balance

First check the transactions in finacle/sanchay post with entries in Passbook. Find out which entries are missing. Inform the matter to your divisional head along with appropriate documents showing transactions of missing entries. Divisional heads should cross check the details with concerned SBCO incharge. Divisional head may give permission for deposits/withdrawals after necessary enquiry. Then after obtaining permission from divisional head follow the procedure below.

**Case 1: Excess balance transferred to SB**
1. Invoke menu **CXFER**
2. Choose function as ADD and transaction type/sub type as Bank Induced.
3. Click on GO (F4)
4. Enter Dr account Id as Customer sb ac no.
5. Enter Cr account id as SOLID+0340
6. Enter appropriate remarks
7. Click on submit (F10) and note the tran id
8. Verify the tran id in same menu in supervisor login

**Case 2: Less balance transferred to SB**
1. Invoke menu **CXFER**
2. Choose function as ADD and transaction type/sub type as Bank Induced.
3. Click on GO (F4)
4. Enter Dr account id as SOLID+0340
5. Enter Cr account Id as Customer sb ac no.
6. Enter appropriate remarks
7. Click on submit (F10) and note the tran id
8. Verify the tran id in same menu in supervisor login

## 13.8 Accounts wrongly opened without selecting the Agents

**Case 1 RD accounts**
Link the rd account to agent id by following the process explained in **section 2.12** . As agent commission won’t be credited, we have to manually deposit the commission to agent SB account as explained below.
1. Invoke menu **CXFER**
2. Choose function as ADD and transaction type/sub type as Bank Induced.
3. Click on GO (F4)
4. Enter Dr account id as SOLID+0323
5. Enter Cr account Id as agent SB ac no.
6. Enter appropriate remarks
7. Click on submit (F10) and note the tran id
8. Verify the tran id in same menu in supervisor login

**Case 2: Other TDA accounts**
If you forget to select agent id while opening accounts like NSC/KVP/TD/MIS agent commission won’t be credited to agent SB account. You need link the agent id but you have to pay commission by following the procedure as show above in **Case 1**.

## 13.9 RD Accounts migrated to Finacle with wrong Account balance

**Case 1: Short amount transferred to RD**
First check the transactions in finacle/sanchay post with entries in Passbook. Find out which entries are missing. Inform the matter to your divisional head along with appropriate documents showing transactions of missing entries. Divisional heads should cross check the details with concerned SBCO incharge. Divisional head may give permission for deposits after necessary enquiry. Then after obtaining permission from divisional head follow the procedure below.
1. Invoke **CRDP** menu
2. Choose function as Add
3. Choose transaction type as Bank Induced
4. Click on GO (F4)
5. Enter account id
6. Enter transaction amount
7. Choose transaction type as Transfer
8. Enter account id as SOLID+0326
9. Enter transfer amount
10. Click on SUBMIT (F10)
11. Verify the tran id using same menu in supervisor login.
12. This entry will come in LOT. Round off the amount and deduct the amount from RD deposit amount. We won’t account for this entry as it was already accounted for before.

**Case 2: Excess amount transferred to finacle**
First finalize how much amount has been transferred in excess. Then account for this excess amount in RD deposit in receipts side and on payment side show the same amount in UCP. Then report the matter to your divisional that the amount was shown in UCP. Contact the customer and try to explain the matter to customer. Collect the excess deposit amount from customer and credit the recovered amount in UCR. Make proper remarks that this UCR amount was in contra to UCP that was shown earlier. This is the correct procedure you to follow.

## 13.10 RD Standing Instruction not executed due to Finacle Problem

**This process has been disabled at present. See the alternative procedure given at the end.**
To execute the standing instruction manually i.e., when any standing instruction not executed due to system fault we can execute using this menu in India post finacle. Following procedure is the India post finacle guide for manual execution of standing instruction.
1. First identify the standing instruction number
   a) Invoke **HSSIM** menu
   b) Function - Inquire
   c) Click on the searcher beside Standing instruction sl no.
   d) Enter Account number (For RD standing instruction, enter RD account number)
   e) Click on SUBMIT (F10)
   f) Note down the Standing instruction sl no.
2. Invoke **HSSIM** menu
3. Function - Modify
4. Enter Standing instruction sl no. (Which we have found earlier)
5. Click on GO (F4)
6. Then in the header details
   a) Select execution time as "ANYTIME"
   b) Next execution date as "EOD date (current date)"
7. Click on SUBMIT (F10)
8. Verify the Standing instruction sl no. in the same menu in supervisor login.

Next Step is
1. Invoke **HSIE** menu
2. Select execution time as "ANYTIME"
3. Click on SUBMIT (F10)
4. Then finally take the report from **HFINRPT**.
5. Invoke **HPR** to view the report

Next Step is
1. Invoke **HSSIM** menu
2. Function - Modify
3. Enter Standing instruction sl no.
4. Click on GO (F4)
5. In header details
   a) Change execution time as "B-after change of date"
   b) Next execution date as "next due date for execution" (15th of next month)
6. Click on SUBMIT (F10)
7. Verify the Standing instruction sl no. in the same menu in supervisor login.
**Note:** Generally standing instruction will be failed in some cases even though Sb account is having enough balance due to technical problem at the central server.

**Alternate Procedure as of now:**
Add one more standing Instruction from SB to RD with 15th of Next month as the next execution date. On 15th of Next month, two Standing Instructions will be executed for that particular RD account. On 16th of next month, Delete 2nd Standing Instruction.

## 13.11 PPF Accounts migrated to Finacle with wrong Account balance

If you find any mistakes in PPF balances then first compare the Passbook entries with the ledger available at the office. Give proper IRs and calculate correct interests. Then create the correct ledger in excel format. Report the matter to divisional head and get appropriate permissions.
In finacle we have to close the account showing as transfer out to bank. Then with the correct ledger entries transfer the account in again. This way we can update the account with correct entries.
To transfer out the account to bank follow the procedure in **section 5.13** of this book
To transfer in the account follow the procedure in **section 5.14** of this book.

## 13.12 Procedure to find the forgotten instruction number when an account is transferred using HACXFSOL

Generally in DOP Finacle we use the menu **HACXFSOL** to transfer the account from one SOL ID to another SOL ID.
Suppose if the account transfer is completed in the Counter level and by mistake for any reason if the counter PA forgot to note down the instruction number we can trace the instruction number by using the menu **HAFI**.

**Procedure:**
1. Invoke **HAFI** menu
2. Enter the Table Short Name as "ATT"
3. Give two blank spaces in the Ref. No. field.
4. Enter the filed Entered By as "User name of the person who have done transfer transaction"
5. Enter the field Entered on as "Enter the date of transaction"
6. Select the Authorized option as "Not Authorized"
7. Click on GO(F4)
8. System will display the unverified instruction numbers.

## 13.13 Procedure to find the forgotten Instruction number when an account scheme is changed using HACXFRSC

Generally we use the menu **HACXFRSC** to change the scheme code of an account i.e., for example if we want to change the SB normal account to cheque account.
When we change the scheme code of an account at Counter level the system will generate the instruction number for any reason if the user forget to note down the instruction number we can trace the number using the menu **HAFI**.

**Procedure:**
1. Invoke **HAFI** menu
2. Enter the table short name as "SCT"
3. Give two blank spaces in the Ref. No field
4. Enter the field Entered By as "User name of the person who have done transaction"
5. Enter the field Entered on as "Date of transaction"
6. Select the Authorized option as "All"
7. Click on GO(F4)
8. Then the system will display the list of unverified instruction numbers.

## 13.14 Problems with migration of MIS Interest into Finacle

We have seen cases of wrong pending interest transferred to finacle due to irregular data entry in sanchay post. Either excess interest is transferred or short interest is transferred. Let’s see both cases.

**Case 1: Excess interest transferred to finacle.**
Follow the procedure of interest withdrawal in **case 2 of section 4.3** of this book and transfer the excess amount to postmaster account (SOLID+0340). Make an error entry and report the matter to divisional head.

**Case 2: Short interest transferred to finacle.**
Report the matter to your divisional head with appropriate documents that interest was not already paid. After obtaining permission from divisional head, manually make the payment.

## 13.15 SSA Excess Deposits

Sukanya accounts are by default Debit frozen in finacle. If you make excess or wrong deposits into sukanya you cannot withdraw them. If you have to withdraw the amount then at first you have to unfreeze it. Let’s see how it is done.
1. Invoke **HAFSM** menu
2. Function - Unfreeze
3. Enter A/C ID
4. Click on GO (F4)
5. Select the required A/C numbers
6. Click on SUBMIT (F10)
7. Verify the transaction in the same menu in supervisor login
After unfreezing the account withdraw the excess or wrong deposit amount using **CTM** and verify. After withdrawal is over we have to debit freeze the account. Follow the procedure to debit freeze the account.
1. Invoke **HAFSM** menu
2. Function – Debit Freeze
3. Enter A/C ID or CIF id
4. Enter Freeze Reason Code
5. Click on GO (F4)
6. Select the required A/C number
7. Click on SUBMIT (F10)
8. Verify the transaction in the same menu in supervisor login
Alternately request the customer for the excess deposited amount.

## 13.16 Procedure to find the forgotten transaction ID, Account ID, Registration Number

**Case 1: To find forgotten Transaction ID**
1. Invoke **HFTI** menu
2. Enter Entry User ID
3. Select Transaction Status as
   a) Entered for RD Deposit, SB Withdrawals above Rs.5000, CXFER transactions above Rs.5000.
   b) Posted for all other transactions.
4. Click on GO (F4)
5. System will display all the transaction according to the selected category.

**Case 2: To find forgotten Account ID**
1. Invoke **HFTI** menu
2. Enter Entry User ID
3. Select Transaction Status as Entered
4. Click on GO (F4)
5. System will display the Entered state transactions which includes Account Openings

**Alternately**
1. Invoke **HAFI** menu
2. Enter Entered Date as Today’s Date
3. Select Status as Not Authorized
4. Enter Entered by field with Counter PA user id
5. Click on GO (F4)
6. System will display
   a) Unverified Account Openings
   b) Unverified Account Modifications
   c) Unverified Account Closures
   d) Unverified Standing Instructions etc.,

**Case 3: To find forgotten Registration Number**
1. Invoke **CSCOAACV** menu in supervisor login
2. Enter CIF ID of the customer with which certificate was issued.
3. Click on the searcher beside the Registration Number
4. System will display the unverified Registration numbers related to that CIF ID.

## 13.17 Problem with Minor to Major Conversion

By Default, for accounts migrated from sanchaya to finacle, Date of birth of all account holders in CIF IDs including minors is 01/07/1960. For minor accounts status will be minor and date of birth is 01/07/1960 by default. So, the software will not allow us to change the date of birth of the minor directly. So, Follow the below given procedure inorder to change the date of birth of the minor.
1. Invoke **CMRC** menu
2. Function – Modify
3. Enter the CIF ID of the minor
4. Click on GO (F4)
5. Select Minor as NO.
6. Click on SUBMIT (F10)
7. Verify the CIF ID in the same menu in supervisor login.
8. Again Invoke **CMRC** in PA login
9. Function – Modify
10. Enter the CIF ID of the minor
11. Click on GO (F4)
12. Enter the Date of Birth of the Minor who has become major
13. Click on SUBMIT (F10)
14. Verify the CIF ID in the same menu in supervisor login.
15. Then use corresponding account modification menus and change the mode of operation to self (012)

**Account modification menus:**
* For SB - CASBAM
* For MIS – CMISAM
* For TD – CMISAM
* For SCSS – CSCAM
* For PPF – CPPFAM
* For RD – CRDACM
* For Certificates – CSCACM

**Note:** If the system shows an error "Preferred Document is Mandatory" after submitting then select Preferred Flag as "YES" at Document Details.

## 13.18 Procedure to find the forgotten transaction id during inventory movement using HIMC

In some cases, we forget to note down the transaction id while transferring stock using HIMC menu. Follow the below procedure to know the forgotten transaction id.
1. Invoke **HIMC** menu in supervisor login
2. Click on the searcher beside the transaction id field.
3. Enter From location (From which the stock has been transferred)
4. Enter To location (To which the stock has been transferred)
5. Enter the Date
6. Select the Status as ‘Enter but not authorized’
7. Click on SUBMIT (F10)
8. System will display the unverified transaction ids.
9. Note down the transaction id and verify it using the same menu in supervisor login only.

## 13.19 Solution for “OSL intimation received after migration for the cheques sent for clearance before migration.”

Before Migration, All post offices are instructed not to accept bank cheques from at least one week before the date of migration. But, Due to various reasons, Offices are accepting bank cheques. These cheques will later be cleared or realized and OSL intimation will be received after finacle migration. In such cases, the following procedure has to be observed for:

**1. Account opening**
In Finacle, OSL accounts are opened by debiting the office account SOL ID + 0382. But, since we have not sent cheques through finacle, the office account SOL ID +0382 will not have sufficient funds. If we have to open the account, we have to credit that particular office account with sufficient funds by debiting the office account SOL ID + 0007 using following procedure.
1. Invoke **CXFER** menu
2. Function - Add
3. Transaction Type/Sub Type – Bank Induced
4. Click on GO (F4)
5. Enter Dr A/C ID (SOL ID + 0007)
6. Enter Cr A/C ID (SOL ID + 0382)
8. Enter the Amount
9. Enter the value date (OSL Clearance Date) - **Important**
10. Enter the cheque number in the Transaction Particulars field (Delete BY TRANSFER and enter the Cheque Number)
11. Enter OSL particulars in Remarks field
12. Click on POST
13. Note down the transaction id and verify the same in the same menu in supervisor login.
After doing this transaction, you can open the account as usual. Don’t forget to change the value date as OSL clearance date while opening the account also.

**2. Subsequent transactions in RD, RD Bulk, PPF, SSA**
In Finacle, OSL Subsequent deposits are made by debiting the office account SOL ID + 0017. But, since we have not sent cheques through finacle, the office account SOL ID + 0017 will not have sufficient funds. If we have to make the deposit, we have to credit that particular office account with sufficient funds by debiting the office account SOL ID + 0007 using following procedure.
1. Invoke **CXFER** menu
2. Function - Add
3. Transaction Type/Sub Type – Bank Induced
4. Click on GO (F4)
5. Enter Dr A/C ID (SOL ID + 0007)
6. Enter Cr A/C ID (SOL ID + 0017)
8. Enter the Amount
9. Enter the value date (OSL Clearance Date) - **Important**
10. Enter the cheque number in the Transaction Particulars field (Delete BY TRANSFER and enter the Cheque Number)
11. Enter OSL particulars in Remarks field
12. Click on POST
13. Note down the transaction id and verify the same in the same menu in supervisor login.
After doing this transaction, you have to follow the normal deposit procedures of respective schemes. Don’t forget to change the value date as OSL clearance date while making the deposit.

**Note 1:** For SB Part II Deposit, Use Debit Account ID as SOL ID + 0007 and Credit Account ID as SB Account ID while doing CXFER transaction. Don’t forget to change the value date as Part II transaction date while making the transaction.
**Note 2:** For SB Part II Withdrawal, Use Debit Account ID as SB Account ID and Credit Account ID as SOL ID + 0340 while doing CXFER transaction. Don’t forget to change the value date as Part II transaction date while making the transaction.
**Note 3:** SB Part II Deposit and Withdrawal transaction will be reflected in LOTs. Round-off the transactions and deduct the amount from deposit/withdrawal total.
`
  }
];

