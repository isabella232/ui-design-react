import * as React from 'react';
import * as styles from '@forgerock/ui-design';
import * as classNames from 'classnames';
import { CardProps, Card, CardImg } from 'react-bootstrap';

interface CardComponentProps extends CardProps, React.HTMLAttributes<HTMLElement> {
  type?: 'hover';
}

function CardComponent(props: React.PropsWithChildren<CardComponentProps>) {
  const classes = classNames(props.type && styles.cardHover, props.className);
  return (
    <Card {...props} className={classes}>
      {props.children}
    </Card>
  );
}

interface CardGridProps extends CardComponentProps {
  description: string;
  icon: string;
  title: string;
}

function CardGrid({ className, description, icon, id, title, onClick }: CardGridProps) {
  const cardClasses = classNames(className, styles.p3, styles.mb4, styles.flexGrow1);
  const iconClasses = classNames(styles.mt4, styles.mxAuto, icon);
  return (
    <CardComponent className={cardClasses} id={id} type="hover" onClick={onClick}>
      <i className={iconClasses} />
      <Card.Body>
        <h5>{title}</h5>
        <Card.Text>{description}</Card.Text>
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
