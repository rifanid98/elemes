export declare class UnsupportedMediaTypeResponseBody {
    statusCode: number;
    message: string;
    error: string;
}
export declare class CustomerResponseBody {
    customer_name: string;
    count: string;
}
export declare class RevenueResponseBody {
    month: string;
    sales: {
        name: string;
        total: string;
    }[];
    total: string;
}
export declare class NumberOfSalesResponseBody {
    month: string;
    sales: {
        name: string;
        total: string;
    }[];
    total: string;
}
export declare class SalesProfitResponseBody {
    month: string;
    sales: {
        name: string;
        total: string;
    }[];
    total: string;
}
export declare class SalesTargetResponseBody {
    month: string;
    sales: {
        name: string;
        total: string;
    }[];
    total: string;
    ytd: string;
}
