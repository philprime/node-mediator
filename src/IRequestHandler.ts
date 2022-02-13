export abstract class IRequestHandler<TRequest, TResult> {

  abstract handle(request: TRequest): Promise<TResult>;

  abstract getTypeName(): string;
}
