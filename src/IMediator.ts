import {IMediatorRequest} from "./IMediatorRequest";

export interface IMediator {

  send<TResult>(request: IMediatorRequest<TResult>): Promise<TResult>

}
