import { Container, Singleton } from "typescript-ioc";
import { IMediatorRequest } from "./IMediatorRequest";
import { IMediator } from "./IMediator";
import { IRequestHandler } from "./IRequestHandler";

@Singleton
export class Mediator implements IMediator {

  async send<Result>(request: IMediatorRequest<Result>): Promise<Result> {
    const name = request.getTypeName();
    const HandlerClass: {
      new(request: IMediatorRequest<Result>): IRequestHandler<IMediatorRequest<Result>, Result>
    } = Container.getValue(name);
    if (HandlerClass === undefined) {
      throw new Error("No mediator handler found for: " + name);
    }
    return new HandlerClass(request).handle(request);
  }
}
