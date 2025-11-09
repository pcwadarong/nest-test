import {
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BOARD_STATUS } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  transform(value: any) {
    value = value.toUpperCase();

    const validStatuses = Object.values(BOARD_STATUS);

    if (!validStatuses.includes(value))
      throw new BadRequestException(`${value} isn't in the status options`);

    return value;
  }
}
