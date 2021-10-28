const myComponent = (props) => {
  return (
    <div>
      안녕, 내 이름은 {props.name} <br />
      childeren 값은 {props.children}입니다.
    </div>
  );
}

myComponent.defaultProps = {
  name: '기본 이름'
};

export default myComponent;