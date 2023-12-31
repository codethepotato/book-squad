"""empty message

Revision ID: 1ac640769459
Revises: e3e0038cd548
Create Date: 2023-08-09 10:08:37.564179

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1ac640769459'
down_revision = 'e3e0038cd548'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('programmers', schema=None) as batch_op:
        batch_op.add_column(sa.Column('picture', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('programmers', schema=None) as batch_op:
        batch_op.drop_column('picture')

    # ### end Alembic commands ###
