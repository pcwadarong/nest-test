import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import type { BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardService.getAllBoards();
  // }

  // @Get('/:id')
  // getBoardByID(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   return this.boardService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}
