import {IRequestHandler} from "./IRequestHandler";
import {Container} from "typescript-ioc";
import {IMediatorRequest} from "./IMediatorRequest";

export function MediatorHandler<TRequest extends IMediatorRequest<TResult>, TResult>(handler: {
  new(): IRequestHandler<TRequest, TResult>
}) {
  const name = (handler.prototype as any).getTypeName();
  Container.bindName(name).to(handler);
}
