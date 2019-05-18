import * as React from 'react';
import { Pagination } from 'react-bootstrap';

export interface Props {
  selectedPage?: number;
  totalPages: number;
}

export default class PaginationComponent extends React.Component<Props> {
  static defaultProps: Props = {
    selectedPage: 1,
    totalPages: 1,
  };

  public render() {
    const pages = this.renderPages();
    return <Pagination>{pages}</Pagination>;
  }

  private renderPages() {
    const selectedPage = this.props.selectedPage || PaginationComponent.defaultProps.selectedPage;
    const pages = [];
    for (let pageNumber = 1; pageNumber <= this.props.totalPages; pageNumber++) {
      pages.push(
        <Pagination.Item
          active={pageNumber === selectedPage}
          activeLabel=""
          key={pageNumber}
          onClick={() => this.onClickPage(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>,
      );
    }
    return pages;
  }

  private onClickPage(e: any) {
    console.log('page:', e);
  }
}
