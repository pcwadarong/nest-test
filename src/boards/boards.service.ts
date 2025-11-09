import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { randomUUID } from 'crypto';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: string): Board {
    const board = this.boards.find((board) => board.id === id);
    if (!board) throw new NotFoundException(`Board with ID "${id}" not found`);
    return board;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board = {
      id: randomUUID(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  deleteBoard(id: string): void {
    const deleted = this.getBoardById(id);
    this.boards.filter((board) => board.id !== deleted.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
