import type { AxiosPromise } from "axios";
import Api from "api/Api";
import type { ApiResponse } from "./ApiResponses";
import type {
  Providers,
  ProviderTemplates,
  SearchResultsProviders,
  ProvidersDataArray,
} from "constants/providerConstants";

export type FetchProvidersResponse = ApiResponse<Providers>;

export type FetchProviderDetailsResponse = ApiResponse<ProvidersDataArray>;

export type FetchProviderCategoriesResponse = ApiResponse<string[]>;

export type FetchProviderTemplateResponse = ApiResponse<ProviderTemplates[]>;

export type SearchApiOrProviderResponse = ApiResponse<{
  providers: SearchResultsProviders[];
}>;

export interface FetchProviderTemplatesRequest {
  providerId: string;
}

export interface FetchProviderDetailsByProviderIdRequest {
  providerId: string;
}

export interface FetchProviderWithCategoryRequest {
  category: string;
  page: number;
}

export interface SearchApiOrProviderRequest {
  searchKey: string;
}

export interface AddApiToPageRequest {
  name: string;
  pageId: string;
  marketplaceElement: any;
  workspaceId?: string;
  // Added for analytics
  source?: string;
}

export class ProvidersApi extends Api {
  static providersURL = "v1/providers";
  static providerCategoriesURL = "v1/providers/categories";

  static providerDetailsByIdURL = (providerId: string) => {
    return `v1/marketplace/providers/${providerId}`;
  };

  static providerTemplateURL = (providerId: string) => {
    return `v1/marketplace/templates?providerId=${providerId}`;
  };

  static searchApiOrProviderUrl = (searchKey: string) => {
    return `v1/marketplace/search?searchKey=${searchKey}`;
  };

  static providersWithCategoryURL = (category: string, page: number) => {
    return `v1/marketplace/providers?category=${category}&page=${page}&size=50`;
  };

  static addApiToPageURL = `v1/items/addToPage`;

  static async fetchProviders(): Promise<AxiosPromise<FetchProvidersResponse>> {
    return Api.get(ProvidersApi.providersURL);
  }

  static async fetchProviderTemplates(
    request: FetchProviderTemplatesRequest,
  ): Promise<AxiosPromise<FetchProviderTemplateResponse>> {
    const { providerId } = request;
    return Api.get(ProvidersApi.providerTemplateURL(providerId));
  }

  static async seachApiOrProvider(
    request: SearchApiOrProviderRequest,
  ): Promise<AxiosPromise<SearchApiOrProviderResponse>> {
    const { searchKey } = request;
    return Api.get(ProvidersApi.searchApiOrProviderUrl(searchKey));
  }

  static async addApiToPage(
    request: AddApiToPageRequest,
  ): Promise<AxiosPromise<ApiResponse>> {
    return Api.post(ProvidersApi.addApiToPageURL, request);
  }

  static async fetchProvidersCategories(): Promise<
    AxiosPromise<FetchProviderCategoriesResponse>
  > {
    return Api.get(ProvidersApi.providerCategoriesURL);
  }

  static async fetchProvidersWithCategory(
    request: FetchProviderWithCategoryRequest,
  ): Promise<AxiosPromise<FetchProvidersResponse>> {
    const { page } = request;
    return Api.get(
      ProvidersApi.providersWithCategoryURL(request.category, page),
    );
  }

  static async fetchProviderDetailsByProviderId(
    request: FetchProviderDetailsByProviderIdRequest,
  ): Promise<AxiosPromise<FetchProviderDetailsResponse>> {
    const { providerId } = request;
    return Api.get(ProvidersApi.providerDetailsByIdURL(providerId));
  }
}

export default ProvidersApi;
