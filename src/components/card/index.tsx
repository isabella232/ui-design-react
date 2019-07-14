import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import * as classNames from 'classnames';
import { CardProps, Card, CardImg } from 'react-bootstrap';

interface Props extends CardProps, React.HTMLAttributes<{}> {
  type?: 'hover';
}

function CardComponent(props: React.PropsWithChildren<Props>) {
  const classes = classNames(props.type && styles.cardHover, props.className);
  return (
    <Card {...props} className={classes}>
      {props.children}
    </Card>
  );
}

interface CardGridProps {
  icon: string;
  text: string;
  title: string;
  onClick: () => void;
}

function CardGrid({ icon, text, title, onClick }: CardGridProps) {
  const cardClasses = classNames(styles.p3, styles.mb4, styles.flexGrow1);
  const iconClasses = classNames(styles.mt4, styles.mxAuto, icon);
  return (
    <CardComponent className={cardClasses} type="hover" onClick={onClick}>
      <i className={iconClasses} />
      <Card.Body>
        <h5>{title}</h5>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </CardComponent>
  );
}

function CardHeader(props: any) {
  return <Card.Header {...props}>{props.children}</Card.Header>;
}

CardComponent.Body = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={classNames(className, styles.cardBody)}>{children}</div>
);
CardComponent.Grid = CardGrid;
CardComponent.Header = CardHeader;
CardComponent.Text = ({ children }: React.PropsWithChildren<{}>) => (
  <p className={styles.cardText}>{children}</p>
);
CardComponent.Title = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div className={classNames(className, styles.cardTitle)}>{children}</div>
);
CardComponent.Img = CardImg;

export default CardComponent;
