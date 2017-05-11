export default ComposedComponent => props => (
  <div>
    <ComposedComponent {...props} />
    <style jsx global />
  </div>
)
