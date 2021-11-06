import { MessageBody, SubscribeMessage } from '@nestjs/websockets'

export class AppGateways {
  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data
  }
}
