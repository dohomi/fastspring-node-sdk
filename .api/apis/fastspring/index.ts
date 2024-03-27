import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'fastspring/1.0 (api/6.1.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Get an account
   *
   * @throws FetchError<500, types.GetoneaccountResponse500>
   */
  getoneaccount(metadata: types.GetoneaccountMetadataParam): Promise<FetchResponse<200, types.GetoneaccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}', 'get', metadata);
  }

  /**
   * Update account
   *
   * @throws FetchError<500, types.UpdateexistingaccountResponse500>
   */
  updateexistingaccount(body: types.UpdateexistingaccountBodyParam, metadata: types.UpdateexistingaccountMetadataParam): Promise<FetchResponse<200, types.UpdateexistingaccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}', 'post', body, metadata);
  }

  /**
   * Get authenticated account management URL
   *
   * @throws FetchError<500, types.GetauthenticatedaccountmanagementUrlResponse500>
   */
  getauthenticatedaccountmanagementURL(metadata: types.GetauthenticatedaccountmanagementUrlMetadataParam): Promise<FetchResponse<200, types.GetauthenticatedaccountmanagementUrlResponse200>> {
    return this.core.fetch('/accounts/{account_id}/authenticate', 'get', metadata);
  }

  /**
   * Create an account
   *
   * @throws FetchError<500, types.CreateanaccountResponse500>
   */
  createanaccount(body: types.CreateanaccountBodyParam): Promise<FetchResponse<200, types.CreateanaccountResponse200>> {
    return this.core.fetch('/accounts', 'post', body);
  }

  /**
   * If no parameters are sent, the operation will return a list of accountIDs.
   *
   * @summary Get all accounts or Search for accounts by parameter
   * @throws FetchError<500, types.LookUpAccountsbyParametersResponse500>
   */
  lookUpAccountsbyParameters(metadata?: types.LookUpAccountsbyParametersMetadataParam): Promise<FetchResponse<200, types.LookUpAccountsbyParametersResponse200>> {
    return this.core.fetch('/accounts', 'get', metadata);
  }

  /**
   * Create a coupon
   *
   */
  createanewcoupon(body: types.CreateanewcouponBodyParam): Promise<FetchResponse<200, types.CreateanewcouponResponse200>> {
    return this.core.fetch('/coupons', 'post', body);
  }

  /**
   * Assign codes to a coupon
   *
   */
  addcouponcodestoacoupon(body: types.AddcouponcodestoacouponBodyParam, metadata: types.AddcouponcodestoacouponMetadataParam): Promise<FetchResponse<200, types.AddcouponcodestoacouponResponse200>> {
    return this.core.fetch('/coupons/{coupon_id}', 'post', body, metadata);
  }

  /**
   * Retrieve coupon details
   *
   */
  retrievecoupondetails(metadata: types.RetrievecoupondetailsMetadataParam): Promise<FetchResponse<200, types.RetrievecoupondetailsResponse200>> {
    return this.core.fetch('/coupons/{coupon_id}', 'get', metadata);
  }

  /**
   * Get coupon codes assigned to a coupon
   *
   */
  getcouponcodesassignedtoacoupon(body: types.GetcouponcodesassignedtoacouponBodyParam, metadata: types.GetcouponcodesassignedtoacouponMetadataParam): Promise<FetchResponse<200, types.GetcouponcodesassignedtoacouponResponse200>>;
  getcouponcodesassignedtoacoupon(metadata: types.GetcouponcodesassignedtoacouponMetadataParam): Promise<FetchResponse<200, types.GetcouponcodesassignedtoacouponResponse200>>;
  getcouponcodesassignedtoacoupon(body?: types.GetcouponcodesassignedtoacouponBodyParam | types.GetcouponcodesassignedtoacouponMetadataParam, metadata?: types.GetcouponcodesassignedtoacouponMetadataParam): Promise<FetchResponse<200, types.GetcouponcodesassignedtoacouponResponse200>> {
    return this.core.fetch('/coupons/{coupon_id}/codes', 'get', body, metadata);
  }

  /**
   * Delete all codes associated with a coupon
   *
   */
  deleteallcouponcodesfromacoupon(metadata: types.DeleteallcouponcodesfromacouponMetadataParam): Promise<FetchResponse<200, types.DeleteallcouponcodesfromacouponResponse200>> {
    return this.core.fetch('/coupons/{coupon_id}/codes', 'delete', metadata);
  }

  /**
   * Get processed events
   *
   * @throws FetchError<500, types.GetprocessedeventsResponse500>
   */
  getprocessedevents(metadata: types.GetprocessedeventsMetadataParam): Promise<FetchResponse<200, types.GetprocessedeventsResponse200>> {
    return this.core.fetch('/events/processed', 'get', metadata);
  }

  /**
   * Get unprocessed events
   *
   * @throws FetchError<500, types.GetunprocessedeventsResponse500>
   */
  getunprocessedevents(metadata: types.GetunprocessedeventsMetadataParam): Promise<FetchResponse<200, types.GetunprocessedeventsResponse200>> {
    return this.core.fetch('/events/unprocessed', 'get', metadata);
  }

  /**
   * Update an event
   *
   */
  updateasingleevent(body: types.UpdateasingleeventBodyParam, metadata: types.UpdateasingleeventMetadataParam): Promise<FetchResponse<200, types.UpdateasingleeventResponse200>> {
    return this.core.fetch('/events/{event_id}', 'post', body, metadata);
  }

  /**
   * Get orders by ID
   *
   * @throws FetchError<400, types.GetordersbyIdResponse400> Bad request
   */
  getordersbyID(metadata: types.GetordersbyIdMetadataParam): Promise<FetchResponse<200, types.GetordersbyIdResponse200>> {
    return this.core.fetch('/orders/{order_id}', 'get', metadata);
  }

  /**
   * Get orders by product path
   *
   */
  getordersbyproductpath(metadata: types.GetordersbyproductpathMetadataParam): Promise<FetchResponse<200, types.GetordersbyproductpathResponse200>> {
    return this.core.fetch('/orders?products={product_path}&limit={limit}&page={page}', 'get', metadata);
  }

  /**
   * Get orders by date range
   *
   * @throws FetchError<400, types.GetordersbydaterangeResponse400>
   */
  getordersbydaterange(metadata: types.GetordersbydaterangeMetadataParam): Promise<FetchResponse<200, types.GetordersbydaterangeResponse200>> {
    return this.core.fetch('/orders?begin={begin_date}&end={end_date}&limit={limit}&page={page}', 'get', metadata);
  }

  /**
   * Get orders by product path AND date range
   *
   */
  getordersbyproductdaterange(metadata: types.GetordersbyproductdaterangeMetadataParam): Promise<FetchResponse<200, types.GetordersbyproductdaterangeResponse200>> {
    return this.core.fetch('/orders?products={product_path}&begin={begin_date}&end={end_date}', 'get', metadata);
  }

  /**
   * Get orders by end date
   *
   */
  getordersbyenddate(metadata: types.GetordersbyenddateMetadataParam): Promise<FetchResponse<200, types.GetordersbyenddateResponse200>> {
    return this.core.fetch('/orders?end={end_date}', 'get', metadata);
  }

  /**
   * Get orders with returns only
   *
   */
  getordersbyreturn(metadata: types.GetordersbyreturnMetadataParam): Promise<FetchResponse<200, types.GetordersbyreturnResponse200>> {
    return this.core.fetch('/orders?begin={begin_date}&end={end_date}&returns={return}', 'get', metadata);
  }

  /**
   * Update order tags and attributes
   *
   */
  updateordertagsandattributes(body: types.UpdateordertagsandattributesBodyParam): Promise<FetchResponse<200, types.UpdateordertagsandattributesResponse200>> {
    return this.core.fetch('/orders', 'post', body);
  }

  /**
   * Get products by path
   *
   */
  getproductsbyid(metadata: types.GetproductsbyidMetadataParam): Promise<FetchResponse<200, types.GetproductsbyidResponse200>> {
    return this.core.fetch('/products/{product_path}', 'get', metadata);
  }

  /**
   * Get all product IDs
   *
   */
  getlistofallproductids(): Promise<FetchResponse<200, types.GetlistofallproductidsResponse200>> {
    return this.core.fetch('/products', 'get');
  }

  /**
   * Create and update products
   *
   * @throws FetchError<500, types.CreateoneormorenewproductsResponse500>
   */
  createoneormorenewproducts(body: types.CreateoneormorenewproductsBodyParam): Promise<FetchResponse<200, types.CreateoneormorenewproductsResponse200> | FetchResponse<201, types.CreateoneormorenewproductsResponse201>> {
    return this.core.fetch('/products', 'post', body);
  }

  /**
   * Get all offers for a product by offer type
   *
   */
  getalloffersforproductbyoffertype(metadata: types.GetalloffersforproductbyoffertypeMetadataParam): Promise<FetchResponse<200, types.GetalloffersforproductbyoffertypeResponse200>> {
    return this.core.fetch('/products/offers/{product_path}', 'get', metadata);
  }

  /**
   * Create or Update Product offers
   *
   * @throws FetchError<500, types.CreateorupdateproductoffersResponse500>
   */
  createorupdateproductoffers(body: types.CreateorupdateproductoffersBodyParam, metadata: types.CreateorupdateproductoffersMetadataParam): Promise<FetchResponse<200, types.CreateorupdateproductoffersResponse200>> {
    return this.core.fetch('/products/offers/{product_path}', 'post', body, metadata);
  }

  /**
   * Get all product prices
   *
   */
  getallproductsprice(): Promise<FetchResponse<200, types.GetallproductspriceResponse200>> {
    return this.core.fetch('/products/price', 'get');
  }

  /**
   * Get a product price
   *
   */
  getspecificproductprice(metadata: types.GetspecificproductpriceMetadataParam): Promise<FetchResponse<200, types.GetspecificproductpriceResponse200>> {
    return this.core.fetch('/products/price/{id}', 'get', metadata);
  }

  /**
   * Get all product prices in specified country
   *
   */
  getallproductspricewithcountry(metadata: types.GetallproductspricewithcountryMetadataParam): Promise<FetchResponse<200, types.GetallproductspricewithcountryResponse200>> {
    return this.core.fetch('/products/price?country={country}', 'get', metadata);
  }

  /**
   * Get all product prices in specified country and currency
   *
   */
  getallproductspricewithcountryandcurrency(metadata: types.GetallproductspricewithcountryandcurrencyMetadataParam): Promise<FetchResponse<200, types.GetallproductspricewithcountryandcurrencyResponse200>> {
    return this.core.fetch('/products/price?country={country}&currency={currency}', 'get', metadata);
  }

  /**
   * Get a product price in a specified country and currency
   *
   */
  getspecificproductpricecountrycurrency(metadata: types.GetspecificproductpricecountrycurrencyMetadataParam): Promise<FetchResponse<200, types.GetspecificproductpricecountrycurrencyResponse200>> {
    return this.core.fetch('/products/price/{id}?country={country}&currency={currency}', 'get', metadata);
  }

  /**
   * Get a product price in a specified country
   *
   */
  getspecificproductpricecountry(metadata: types.GetspecificproductpricecountryMetadataParam): Promise<FetchResponse<200, types.GetspecificproductpricecountryResponse200>> {
    return this.core.fetch('/products/price/{id}?country={country}', 'get', metadata);
  }

  /**
   * Delete products
   *
   * @throws FetchError<500, types.DeleteProductsResponse500>
   */
  deleteProducts(metadata: types.DeleteProductsMetadataParam): Promise<FetchResponse<200, types.DeleteProductsResponse200>> {
    return this.core.fetch('/products/{id}', 'delete', metadata);
  }

  /**
   * Get returns
   *
   */
  getoneormultiplereturns(metadata: types.GetoneormultiplereturnsMetadataParam): Promise<FetchResponse<200, types.GetoneormultiplereturnsResponse200>> {
    return this.core.fetch('/returns/{id}', 'get', metadata);
  }

  /**
   * Create returns
   *
   */
  postOneMoreOrdersReturns(body: types.PostOneMoreOrdersReturnsBodyParam): Promise<FetchResponse<200, types.PostOneMoreOrdersReturnsResponse200>> {
    return this.core.fetch('/returns', 'post', body);
  }

  /**
   * Create a session
   *
   * @throws FetchError<400, types.CreateasessionwithoutoverridinganydefaultvaluesResponse400>
   */
  createasessionwithoutoverridinganydefaultvalues(body: types.CreateasessionwithoutoverridinganydefaultvaluesBodyParam): Promise<FetchResponse<200, types.CreateasessionwithoutoverridinganydefaultvaluesResponse200>> {
    return this.core.fetch('/sessions', 'post', body);
  }

  /**
   * Get all subscriptions
   *
   * @throws FetchError<500, types.GetallsubscriptioninstancesResponse500>
   */
  getallsubscriptioninstances(): Promise<FetchResponse<200, types.GetallsubscriptioninstancesResponse200>> {
    return this.core.fetch('/subscriptions', 'get');
  }

  /**
   * Update a subscription
   *
   * @throws FetchError<500, types.ChangetheproductforanactivesubscriptionResponse500>
   */
  changetheproductforanactivesubscription(body: types.ChangetheproductforanactivesubscriptionBodyParam): Promise<FetchResponse<200, types.ChangetheproductforanactivesubscriptionResponse200>> {
    return this.core.fetch('/subscriptions', 'post', body);
  }

  /**
   * Preview a proposed prorated plan change
   *
   * @throws FetchError<500, types.SubscriptoinProratePreviewEstimateResponse500>
   */
  subscriptoinProratePreviewEstimate(body: types.SubscriptoinProratePreviewEstimateBodyParam): Promise<FetchResponse<200, types.SubscriptoinProratePreviewEstimateResponse200>> {
    return this.core.fetch('/subscriptions/estimate', 'post', body);
  }

  /**
   * Get a subscription
   *
   * @throws FetchError<500, types.GetoneormoresubscriptioninstancesResponse500>
   */
  getoneormoresubscriptioninstances(metadata: types.GetoneormoresubscriptioninstancesMetadataParam): Promise<FetchResponse<200, types.GetoneormoresubscriptioninstancesResponse200>> {
    return this.core.fetch('/subscriptions/{subscription_id}', 'get', metadata);
  }

  /**
   * Cancel a subscription
   *
   * @throws FetchError<500, types.CancelsubscriptioninstancesResponse500>
   */
  cancelsubscriptioninstances(metadata: types.CancelsubscriptioninstancesMetadataParam): Promise<FetchResponse<200, types.CancelsubscriptioninstancesResponse200>> {
    return this.core.fetch('/subscriptions/{subscription_id}', 'delete', metadata);
  }

  /**
   * Resume a canceled subscription
   *
   * @throws FetchError<500, types.UncancelasubscriptionpriortodeactivationResponse500>
   */
  uncancelasubscriptionpriortodeactivation(body: types.UncancelasubscriptionpriortodeactivationBodyParam, metadata: types.UncancelasubscriptionpriortodeactivationMetadataParam): Promise<FetchResponse<200, types.UncancelasubscriptionpriortodeactivationResponse200>> {
    return this.core.fetch('/subscriptions/{subscription_id}', 'post', body, metadata);
  }

  /**
   * Get subscription entries
   *
   * @throws FetchError<500, types.GetsubscriptioninstanceentriesResponse500>
   */
  getsubscriptioninstanceentries(metadata: types.GetsubscriptioninstanceentriesMetadataParam): Promise<FetchResponse<200, types.GetsubscriptioninstanceentriesResponse200>> {
    return this.core.fetch('/subscriptions/{subscription_id}/entries', 'get', metadata);
  }

  /**
   * Rebill a managed subscription
   *
   * @throws FetchError<500, types.RebillmanagedsubscriptioninstanceResponse500>
   */
  rebillmanagedsubscriptioninstance(body: types.RebillmanagedsubscriptioninstanceBodyParam): Promise<FetchResponse<200, types.RebillmanagedsubscriptioninstanceResponse200>> {
    return this.core.fetch('/subscriptions/charge', 'post', body);
  }

  /**
   * Pause a subscription
   *
   * @throws FetchError<500, types.PauseasubscriptionResponse500>
   */
  pauseasubscription(body: types.PauseasubscriptionBodyParam, metadata: types.PauseasubscriptionMetadataParam): Promise<FetchResponse<200, types.PauseasubscriptionResponse200>> {
    return this.core.fetch('/subscriptions/{subscription_id}/pause', 'post', body, metadata);
  }

  /**
   * Remove a scheduled pause
   *
   * @throws FetchError<500, types.ResumeapausedsubscriptionResponse500>
   */
  resumeapausedsubscription(metadata: types.ResumeapausedsubscriptionMetadataParam): Promise<FetchResponse<200, types.ResumeapausedsubscriptionResponse200>> {
    return this.core.fetch('/subscriptions/{subscription_id}/resume', 'post', metadata);
  }

  /**
   * Convert an Expired Trial Subscription without a Payment Method
   *
   * @throws FetchError<400, types.ConvertExpiredTrialWithoutPaymentMethodResponse400>
   */
  convertExpiredTrialWithoutPaymentMethod(metadata: types.ConvertExpiredTrialWithoutPaymentMethodMetadataParam): Promise<FetchResponse<200, types.ConvertExpiredTrialWithoutPaymentMethodResponse200>> {
    return this.core.fetch('/subscriptions/{subscription_id}/convert', 'post', metadata);
  }

  /**
   * Get subscription plan change history
   *
   * @throws FetchError<500, types.GetsubscriptionplanCChangehistoryResponse500>
   */
  getsubscriptionplanCChangehistory(metadata: types.GetsubscriptionplanCChangehistoryMetadataParam): Promise<FetchResponse<200, types.GetsubscriptionplanCChangehistoryResponse200>> {
    return this.core.fetch('/subscriptions/{subscription_id}/history', 'get', metadata);
  }

  /**
   * Get a quote
   *
   */
  getQuoteById(metadata: types.GetQuoteByIdMetadataParam): Promise<FetchResponse<200, types.GetQuoteByIdResponse200>> {
    return this.core.fetch('/quotes/{id}', 'get', metadata);
  }

  /**
   * Update a quote
   *
   */
  updateQuote(body: types.UpdateQuoteBodyParam, metadata: types.UpdateQuoteMetadataParam): Promise<FetchResponse<200, types.UpdateQuoteResponse200>> {
    return this.core.fetch('/quotes/{id}', 'put', body, metadata);
  }

  /**
   * Delete a quote
   *
   */
  deleteQuote(metadata: types.DeleteQuoteMetadataParam): Promise<FetchResponse<200, types.DeleteQuoteResponse200>> {
    return this.core.fetch('/quotes/{id}', 'delete', metadata);
  }

  /**
   * Cancel a quote
   *
   */
  cancelQuote(metadata: types.CancelQuoteMetadataParam): Promise<FetchResponse<200, types.CancelQuoteResponse200>> {
    return this.core.fetch('/quotes/{id}/cancel', 'post', metadata);
  }

  /**
   * Get all quotes
   *
   */
  getAllQuotes(metadata?: types.GetAllQuotesMetadataParam): Promise<FetchResponse<200, types.GetAllQuotesResponse200>> {
    return this.core.fetch('/quotes', 'get', metadata);
  }

  /**
   * Create a quote
   *
   */
  createQuote(body: types.CreateQuoteBodyParam): Promise<FetchResponse<200, types.CreateQuoteResponse200>> {
    return this.core.fetch('/quotes', 'post', body);
  }

  /**
   * Update a webhook key secret
   *
   * @throws FetchError<400, types.RotateWebhookKeyResponse400> Bad request due to validation errors
   */
  rotateWebhookKey(body: types.RotateWebhookKeyBodyParam): Promise<FetchResponse<200, types.RotateWebhookKeyResponse200>> {
    return this.core.fetch('/webhooks/keys', 'post', body);
  }

  /**
   * Generates a subscription report
   *
   * @throws FetchError<400, types.GenerateSubscriptionReportResponse400>
   */
  generateSubscriptionReport(body: types.GenerateSubscriptionReportBodyParam): Promise<FetchResponse<200, types.GenerateSubscriptionReportResponse200>> {
    return this.core.fetch('/data/v1/subscription', 'post', body);
  }

  /**
   * Generates a revenue report
   *
   * @throws FetchError<400, types.GenerateRevenueReportResponse400>
   */
  generateRevenueReport(body: types.GenerateRevenueReportBodyParam): Promise<FetchResponse<200, types.GenerateRevenueReportResponse200>> {
    return this.core.fetch('/data/v1/revenue', 'post', body);
  }

  /**
   * Get job information based on a job ID.
   *
   * @throws FetchError<400, types.GetJobByIdResponse400>
   */
  getJobById(metadata: types.GetJobByIdMetadataParam): Promise<FetchResponse<200, types.GetJobByIdResponse200>> {
    return this.core.fetch('/data/v1/jobs/{id}', 'get', metadata);
  }

  /**
   * Get information from a job listing.
   *
   */
  getJobs(): Promise<FetchResponse<200, types.GetJobsResponse200>> {
    return this.core.fetch('/data/v1/jobs', 'get');
  }

  /**
   * Reset cache for data service end points.
   *
   */
  resetCache(): Promise<FetchResponse<200, types.ResetCacheResponse200>> {
    return this.core.fetch('/data/v1/util/cache', 'get');
  }

  /**
   * Download a report based on job ID.
   *
   * @throws FetchError<400, types.DownloadReportResponse400>
   */
  downloadReport(metadata: types.DownloadReportMetadataParam): Promise<FetchResponse<200, types.DownloadReportResponse200>> {
    return this.core.fetch('/data/v1/downloads/{id}', 'get', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AddcouponcodestoacouponBodyParam, AddcouponcodestoacouponMetadataParam, AddcouponcodestoacouponResponse200, CancelQuoteMetadataParam, CancelQuoteResponse200, CancelsubscriptioninstancesMetadataParam, CancelsubscriptioninstancesResponse200, CancelsubscriptioninstancesResponse500, ChangetheproductforanactivesubscriptionBodyParam, ChangetheproductforanactivesubscriptionResponse200, ChangetheproductforanactivesubscriptionResponse500, ConvertExpiredTrialWithoutPaymentMethodMetadataParam, ConvertExpiredTrialWithoutPaymentMethodResponse200, ConvertExpiredTrialWithoutPaymentMethodResponse400, CreateQuoteBodyParam, CreateQuoteResponse200, CreateanaccountBodyParam, CreateanaccountResponse200, CreateanaccountResponse500, CreateanewcouponBodyParam, CreateanewcouponResponse200, CreateasessionwithoutoverridinganydefaultvaluesBodyParam, CreateasessionwithoutoverridinganydefaultvaluesResponse200, CreateasessionwithoutoverridinganydefaultvaluesResponse400, CreateoneormorenewproductsBodyParam, CreateoneormorenewproductsResponse200, CreateoneormorenewproductsResponse201, CreateoneormorenewproductsResponse500, CreateorupdateproductoffersBodyParam, CreateorupdateproductoffersMetadataParam, CreateorupdateproductoffersResponse200, CreateorupdateproductoffersResponse500, DeleteProductsMetadataParam, DeleteProductsResponse200, DeleteProductsResponse500, DeleteQuoteMetadataParam, DeleteQuoteResponse200, DeleteallcouponcodesfromacouponMetadataParam, DeleteallcouponcodesfromacouponResponse200, DownloadReportMetadataParam, DownloadReportResponse200, DownloadReportResponse400, GenerateRevenueReportBodyParam, GenerateRevenueReportResponse200, GenerateRevenueReportResponse400, GenerateSubscriptionReportBodyParam, GenerateSubscriptionReportResponse200, GenerateSubscriptionReportResponse400, GetAllQuotesMetadataParam, GetAllQuotesResponse200, GetJobByIdMetadataParam, GetJobByIdResponse200, GetJobByIdResponse400, GetJobsResponse200, GetQuoteByIdMetadataParam, GetQuoteByIdResponse200, GetalloffersforproductbyoffertypeMetadataParam, GetalloffersforproductbyoffertypeResponse200, GetallproductspriceResponse200, GetallproductspricewithcountryMetadataParam, GetallproductspricewithcountryResponse200, GetallproductspricewithcountryandcurrencyMetadataParam, GetallproductspricewithcountryandcurrencyResponse200, GetallsubscriptioninstancesResponse200, GetallsubscriptioninstancesResponse500, GetauthenticatedaccountmanagementUrlMetadataParam, GetauthenticatedaccountmanagementUrlResponse200, GetauthenticatedaccountmanagementUrlResponse500, GetcouponcodesassignedtoacouponBodyParam, GetcouponcodesassignedtoacouponMetadataParam, GetcouponcodesassignedtoacouponResponse200, GetlistofallproductidsResponse200, GetoneaccountMetadataParam, GetoneaccountResponse200, GetoneaccountResponse500, GetoneormoresubscriptioninstancesMetadataParam, GetoneormoresubscriptioninstancesResponse200, GetoneormoresubscriptioninstancesResponse500, GetoneormultiplereturnsMetadataParam, GetoneormultiplereturnsResponse200, GetordersbyIdMetadataParam, GetordersbyIdResponse200, GetordersbyIdResponse400, GetordersbydaterangeMetadataParam, GetordersbydaterangeResponse200, GetordersbydaterangeResponse400, GetordersbyenddateMetadataParam, GetordersbyenddateResponse200, GetordersbyproductdaterangeMetadataParam, GetordersbyproductdaterangeResponse200, GetordersbyproductpathMetadataParam, GetordersbyproductpathResponse200, GetordersbyreturnMetadataParam, GetordersbyreturnResponse200, GetprocessedeventsMetadataParam, GetprocessedeventsResponse200, GetprocessedeventsResponse500, GetproductsbyidMetadataParam, GetproductsbyidResponse200, GetspecificproductpriceMetadataParam, GetspecificproductpriceResponse200, GetspecificproductpricecountryMetadataParam, GetspecificproductpricecountryResponse200, GetspecificproductpricecountrycurrencyMetadataParam, GetspecificproductpricecountrycurrencyResponse200, GetsubscriptioninstanceentriesMetadataParam, GetsubscriptioninstanceentriesResponse200, GetsubscriptioninstanceentriesResponse500, GetsubscriptionplanCChangehistoryMetadataParam, GetsubscriptionplanCChangehistoryResponse200, GetsubscriptionplanCChangehistoryResponse500, GetunprocessedeventsMetadataParam, GetunprocessedeventsResponse200, GetunprocessedeventsResponse500, LookUpAccountsbyParametersMetadataParam, LookUpAccountsbyParametersResponse200, LookUpAccountsbyParametersResponse500, PauseasubscriptionBodyParam, PauseasubscriptionMetadataParam, PauseasubscriptionResponse200, PauseasubscriptionResponse500, PostOneMoreOrdersReturnsBodyParam, PostOneMoreOrdersReturnsResponse200, RebillmanagedsubscriptioninstanceBodyParam, RebillmanagedsubscriptioninstanceResponse200, RebillmanagedsubscriptioninstanceResponse500, ResetCacheResponse200, ResumeapausedsubscriptionMetadataParam, ResumeapausedsubscriptionResponse200, ResumeapausedsubscriptionResponse500, RetrievecoupondetailsMetadataParam, RetrievecoupondetailsResponse200, RotateWebhookKeyBodyParam, RotateWebhookKeyResponse200, RotateWebhookKeyResponse400, SubscriptoinProratePreviewEstimateBodyParam, SubscriptoinProratePreviewEstimateResponse200, SubscriptoinProratePreviewEstimateResponse500, UncancelasubscriptionpriortodeactivationBodyParam, UncancelasubscriptionpriortodeactivationMetadataParam, UncancelasubscriptionpriortodeactivationResponse200, UncancelasubscriptionpriortodeactivationResponse500, UpdateQuoteBodyParam, UpdateQuoteMetadataParam, UpdateQuoteResponse200, UpdateasingleeventBodyParam, UpdateasingleeventMetadataParam, UpdateasingleeventResponse200, UpdateexistingaccountBodyParam, UpdateexistingaccountMetadataParam, UpdateexistingaccountResponse200, UpdateexistingaccountResponse500, UpdateordertagsandattributesBodyParam, UpdateordertagsandattributesResponse200 } from './types';
