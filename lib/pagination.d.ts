import * as React from 'react';
export interface Props {
    selectedPage?: number;
    totalPages: number;
}
export default class PaginationComponent extends React.Component<Props> {
    static defaultProps: Props;
    render(): JSX.Element;
    private renderPages;
    private onClickPage;
}
