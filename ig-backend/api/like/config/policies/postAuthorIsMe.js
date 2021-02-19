module.exports = async (ctx, next) => {

    if(!ctx.request.query['post.author']) {
      return ctx.unauthorized('Please specify a post.autor={id}')
    }

    const targetUser = String(ctx.request.query['post.author']);
    const loggedIn = String(ctx.state.user.id);

    if (targetUser === loggedIn) {
      return next();
    } else {
      return ctx.unauthorized('Target user is different from logged in user')
    }
}
